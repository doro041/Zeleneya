import React from 'react';
import { LoginContainer } from '../containers/loginContainer';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebase';

const app =  initializeApp(firebaseConfig);

export const LoginApollo = () => {

   
function onSubmit(email, password) {

    console.log("First " + email.email + " " + password.password)
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.email, password.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
   }

    return (
        <LoginContainer onSubmit={onSubmit}/>
    )
}