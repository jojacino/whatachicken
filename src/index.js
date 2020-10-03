import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './storehouse/store'
import Authenticator from './admin/administration'
import './index.css'

render(
    <Provider store={configureStore()}>
        <Authenticator />
    </Provider>,
    document.getElementById('root')
)