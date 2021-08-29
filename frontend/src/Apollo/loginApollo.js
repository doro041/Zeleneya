import React, {useContext} from 'react';
import { LoginContainer } from '../containers/loginContainer';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebase';
import UserContext from '../Context';
import {useHistory} from 'react-router-dom';
import {SetUserCookie} from '../Helpers/Cookie';

initializeApp(firebaseConfig);

export const LoginApollo = () => {

const context = useContext(UserContext);
const history = useHistory();
   
function onSubmit(email, password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.email, password.password)
      .then((userCredential) => {
        
        const user = {
          token: userCredential.user.accessToken,
          userId: userCredential.user.uid,
          username: userCredential.user.displayName,
        };

        SetUserCookie(user);
        context.login(user);
        history.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
   }

    return (
        <LoginContainer onSubmit={onSubmit}/>
    )
}