import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { RegisterApollo } from './Apollo/registerApollo.js';
import {LoginApollo} from './Apollo/loginApollo.js';
import { DisplayName } from './components/DisplayName/displayName.jsx';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={LoginApollo}/>
        <Route exact path='/register' component={RegisterApollo}/>
        <Route exact path='/displayName' component={DisplayName}/>
    </Switch>
)

export default Routes