import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { RegisterContainer } from '../containers/registerContainer';



//Query or mutation with pass props of results to container

const REGISTER = gql`
mutation Mutation($email: String, $username: String, $password: String) {
    register(email: $email, username: $username, password: $password) {
      email
    }
  }
`;

export const RegisterApollo = () => {

const [registerUser, {loading, error}] = useMutation(REGISTER);
<<<<<<< HEAD
   
function onSubmit(username, email, password) {
    registerUser({
=======
  
   function onSubmit($email, $username, $password) {
       console.log($email, $username, $password)
       
       registerUser({
>>>>>>> efe24d6af0670b0eeef2a7cd9e6a354ece6e95f8
           variables: {
            email: email.email,
            username: username.username,
            password: password.password,
            },
       })


        if(loading) return <p>Submiting...</p>
        if(error) return `Error! ${error}`;

   }

    return (
        <RegisterContainer onSubmit={onSubmit}/>
    )
}