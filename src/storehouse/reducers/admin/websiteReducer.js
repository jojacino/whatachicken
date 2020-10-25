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
                        urls: ['/home', '/welcome'],
                        content: <HomePage />
                    },
                    {
                        name: 'menu',
                        urls: ['/menu', '/food', '/drinks'],
                        content: <MenuPage />
                    },
                    {
                        name: 'about',
                        urls: ['/about', '/info'],
                        content: <AboutPage />
                    },
                    {
                        name: 'contact',
                        urls: ['/contact', '/phone', '/email', '/location'],
                        content: <ContactPage />
                    },
                    {
                        name: 'social',
                        urls: ['/social', '/events'],
                        content: <SocialPage />
                    }
                ]
            }
    }
}

export default websiteReducer;