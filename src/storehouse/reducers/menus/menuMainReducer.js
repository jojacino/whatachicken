const menuMainReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE|MENU|MAIN':
            return action.payload
        default:
            return state || {
                currentButton: 'home',
                previousButton: '',
                expanded: true
            } // object with key / value for menu properties
        /** Menu Main Properties 
         * 
         * currentButton :: string :: the button last pressed
         * previousButton :: string :: the button pressed before last
         * 
         * **/
    }
}

export default menuMainReducer;