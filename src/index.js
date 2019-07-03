import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/stylesheets/main.css'

import App from './App'

import * as serviceWorker from './config/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
