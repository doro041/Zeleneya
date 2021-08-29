import { ApolloProvider } from '@apollo/client';
import React, {useState} from 'react';
import './App.css';
import UserContext from './Context';
import {client} from './Apollo/configApollo';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes'
import { CheckIfCookieExist } from './Helpers/Cookie';

const App = (props) => {

  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null)

  const login = (userObject) => {
    setUser({
      ...userObject,
      loggedIn: true
    });
  }
  if(user == null)
  {
    const user = CheckIfCookieExist();
    if(user != null)
    {
      login(user);
    }
  }

 
  const logOut = () => {
    setUser({
      loggedIn: false
    })
  }

  return (
    <UserContext.Provider value={{
      user,
      login,
      logOut,
    }}>
      <ApolloProvider client={client}>
      <Router>
          <Routes/>
        </Router>
      </ApolloProvider>
    </UserContext.Provider>
  );
}

export default App;
