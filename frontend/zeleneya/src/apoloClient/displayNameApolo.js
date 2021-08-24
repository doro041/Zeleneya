import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { DisplayNameContainer } from '../containers/displayNameContainer';


//Query or mutation with pass props of results to container

const DISPLAY_NAME = gql`
query Query($getUserByEmailEmail: String) {
    getUserByEmail(email: $getUserByEmailEmail) {
        displayName
    }
}
`;

export const DisplayNameApollo = (email) => {

    
   const {loading, error, data} = useQuery(DISPLAY_NAME, {
       variables: {email},
   })

   if(loading) return <p>Loading...</p>
   if(error) return `Error! ${error}`;
    
    return (
        <DisplayNameContainer displayName={data.getUserByEmail.displayName}/>        
    )
}