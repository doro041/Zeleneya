import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { RegisterContainer } from '../containers/registerContainer';



//Query or mutation with pass props of results to container

const REGISTER = gql`
mutation Mutation($registerEmail: String, $registerUsername: String, $registerPassword: String) {
    register(email: $registerEmail, username: $registerUsername, password: $registerPassword) {
      email
    }
  }
`;


export const RegisterApollo = () => {

const [registerUser, {loading, error}] = useMutation(REGISTER);
  
   function onSubmit(registerPassword, registerUsername, registerEmail) {
       console.log(registerPassword, registerUsername, registerEmail)
       registerUser({
           variables: {
            password: "h@rdc0ded",
            username: "hardcoded",
            email: "hardcoded@gmail.com"
            },
       })


        if(loading) return <p>Submiting...</p>
        if(error) return `Error! ${error}`;

   }

    return (
        <RegisterContainer onSubmit={onSubmit}/>
    )
}