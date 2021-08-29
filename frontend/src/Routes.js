import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { RegisterApollo } from './Apollo/registerApollo.js';
import {LoginApollo} from './Apollo/loginApollo.js';
import App from './App.js';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={App.js}/>
        <Route exact path='/register' component={RegisterApollo}/>
        <Route exact path='/login' component={LoginApollo}/>
    </Switch>
)

export default Routes