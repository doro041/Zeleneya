import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { RegisterApollo } from './Apollo/registerApollo.js';
import App from './App.js';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={App.js}/>
        <Route exact path='/register' component={RegisterApollo}/>
    </Switch>
)

export default Routes