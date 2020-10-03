import React from 'react'

import HomePage from '../../../components/pages/home-page/home'

const websiteReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE|REDUX|WEBSITE':
            return action.payload
        default:
            return state || {
                isLoaded: false,
                currentPage: 'home',
                pages: [
                    {
                        name: 'home',
                        position: null,
                        urls: ['/home', '/welcome'],
                        content: <HomePage />
                    },
                    {
                        name: 'about',
                        position: null,
                        urls: ['/about', '/info'],
                        content: 'About Page'
                    },
                    {
                        name: 'menu',
                        position: null,
                        urls: ['/menu', '/food', '/drinks'],
                        content: 'Menu Page'
                    },
                    {
                        name: 'social',
                        position: null,
                        urls: ['/social', '/events'],
                        content: 'Social Page'
                    },
                    {
                        name: 'contact',
                        position: null,
                        urls: ['/contact', '/phone', '/email', '/location'],
                        content: 'Contact Page'
                    }
                ]
            }
    }
}

export default websiteReducer;