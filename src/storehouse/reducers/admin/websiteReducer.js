import React from 'react'

import HomePage from '../../../components/pages/home-page/home'
import AboutPage from '../../../components/pages/about_page/about'
import MenuPage from '../../../components/pages/menu_page/menu'
import SocialPage from '../../../components/pages/social_page/social'
import ContactPage from '../../../components/pages/contact_page/contact'

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
                        content: <AboutPage />
                    },
                    {
                        name: 'menu',
                        position: null,
                        urls: ['/menu', '/food', '/drinks'],
                        content: <MenuPage />
                    },
                    {
                        name: 'social',
                        position: null,
                        urls: ['/social', '/events'],
                        content: <SocialPage />
                    },
                    {
                        name: 'contact',
                        position: null,
                        urls: ['/contact', '/phone', '/email', '/location'],
                        content: <ContactPage />
                    }
                ]
            }
    }
}

export default websiteReducer;