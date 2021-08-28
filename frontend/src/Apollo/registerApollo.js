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
  
   function onSubmit($email, $username, $password) {
       console.log($email, $username, $password)
       
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