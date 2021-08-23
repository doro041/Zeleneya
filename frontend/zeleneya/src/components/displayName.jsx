import React from 'react';
import { gql, useQuery } from '@apollo/client/';

const DISPLAY_NAME = gql`
query Query($getUserByEmailEmail: String) {
    getUserByEmail(email: $getUserByEmailEmail) {
        displayName
    }
}
`;



export const DisplayName = (email) => {

    
   const {loading, error, data} = useQuery(DISPLAY_NAME, {
       variables: {email},
   })

   if(loading) return <p>Loading...</p>
   if(error) return `Error! ${error}`;
    
    return (

        
        <div>{data.getUserByEmail.displayName}</div>
    )
}