/** CONSTANT METHODS */

// returns boolean if string can be parsed by JSON
export function canJSON(str) {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}

// stringify arrays and objects : depth first
export function stringifyArrObjs(arrObjs) {

    // index the array length
    let i = arrObjs.length

    // fast iterate to 0
    while (i--) {

        // get object at index
        var obj = arrObjs[i]

        // iterate the object properties
        for (let prop in obj) {

            // copy propery
            var property = obj[prop]

            // check if prop is an array or object
            if (typeof(property) === 'object' || property.length ) {

                // get current property of iteration
                obj[ prop ] = JSON.stringify( property )

            }
        }
    }

    // return the copy
    return arrObjs
}

// return a parsed array of db objects
export function parseArrObjs(arrObjs) {

    // index the array length
    let i = arrObjs.length

    // fast iterate to 0
    while (i--) {

        // get object at index
        var obj = arrObjs[i]

        // iterate the object properties
        for (let prop in obj) {

            var property = obj[ prop ]
            // if the property can be JSON parsed save it as parsed
            if (canJSON(property)) obj[prop] = JSON.parse(property)

        }        
    }

    // return the copy
    return arrObjs
}

// returns array of objects parsed at depth
export function parseArrObjsDepth(arrObj, depth) {

    console.log("SHOWING parseArrObjsDepth in /storehouse/constants/methods.js on line 70")
    console.log('arrObj')
    console.log(arrObj)
    console.log('Depth: ', depth)


}

// returns CSS property value
export function cssPropertyValue( elem, prop ) {
    return window.getComputedStyle(elem).getPropertyValue(prop)
}

// returns number portion of a string cast as a Number()
export function numInString( string ) {
    return Number(string.match(/[0-9]/g).join(''))
}

// converts quotes in a string from JSON quotes to pipes and vice versa
export function flipQuotes( string ) {

    // return single quoted string if JSON quotes found
    if(string.indexOf('"') >= 0)
        return string.replace(/["]/gm, "'")

    // return JSON quoted string if single quotes found
    if (string.indexOf("'") >= 0)
        return string.replace(/[']/gm, '"')
}

// returns parameter (object) as query string (REST), aka obj to rest
export function objToQuery(objParams) {

    let keys = Object.keys(objParams)

    let stringQuery = ''

    for (let i in keys) {
        stringQuery += keys[i] + '=' + objParams[keys[i]]
        if(i < keys.length - 1) stringQuery += '&'
    }

    return stringQuery
}

// returns code formated css property name from css property name, i.e. returns backgroundColor from background-color
export function cssPropToCodeProp(stringCSSProperty) {

    // convert string into array of characters
    let arrString = stringCSSProperty.split('')
    
    // quick iterate string chars, "reverse" from length
    let x = arrString.length;
    while (x--) {

        // see if current char is a dash
        if (arrString[x] === '-') {

            // capitalize the character in front of the dash, as in: -webkit-, -moz-
            arrString[x + 1] = arrString[x + 1].toUpperCase()

            // remove the dash
            arrString.splice(x, 1)
        }
    }

    // return revised concatenated char string
    return arrString.join('')
}

// returns object with only the element css keys-values that have been set on css
export function simplifiedCSS(elem) {

    // get style declaration form elem
    let style = window.getComputedStyle(elem, null)
    let styleKeys = Array.prototype.slice.call(style)

    // set object for style variables
    let obj = {}

    // iterate style and move non-null key-value pairs to obj
    styleKeys.forEach(key => {
        if (elem.style.hasOwnProperty(key)) {

            obj[cssPropToCodeProp( key )] = style[key]
        }
    })

    // return simplified css object
    return obj
}

// returns promise of XML HTTP reequest based on args
export function xhrPromise(crud, url, params) {

    // create object to refrence from inside the promise
    var p = {}

    // set the object to the new promise
    p = new Promise((resolve, reject) => {

        // Set some initial status variables
        p.isFulfilled = false
        p.value = null

        // begin new request
        let request = new XMLHttpRequest()

        // open request with CRUD type, url, and async=true
        request.open(crud, url, true)

        // check if params and params with token
        if (params && params.token) {

            // set Authorization header to bearer token "bearer schema"
            request.setRequestHeader('Authorization', 'bearer ' + params.token)

            // remove token from params object
            delete params.token
        }

        // set general request headers, using urlencoded RESTful header
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {

                // get response
                var response = request.response

                // return a promise to try again if no response
                if (!response) {

                    resolve(xhrPromise(crud, url, params))

                }

                if (canJSON(response)) {

                    // unescape value for JSON
                    response = unescape(request.response)

                    // parse response if possible
                    response = JSON.parse(response)

                    // parse JSON at depths
                    response = parseArrObjs(response)
                }

                p.isFulfilled = true
                p.value = response

                resolve(response)
            }
        }
        request.onerror = err => {
            console.log("Error! : " + err + "...")
            reject(err)
        }
        
        // convert parameters object to RESTful query string
        if (typeof(params) === 'object') params = objToQuery(params)
        
        // send request
        request.send(params)
    })

    // return modified xhr promise
    return p
}
