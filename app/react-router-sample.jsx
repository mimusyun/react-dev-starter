import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from './pages/App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Outer from './pages/Outer.jsx'

ReactDOM.render((
<Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
    </Route>
</Router>
), document.getElementById('app'))
