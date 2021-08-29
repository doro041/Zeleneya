import React,{useContext} from 'react';
import UserContext from '../../Context';
import {useHistory} from 'react-router-dom';



export const DisplayName = () => {

    const GoToRegister = () => {
        const history = useHistory();
        history.push('/register')
    }

    const context = useContext(UserContext)
    const user = context.user;
    if(user == null)
    {
        return(
            <div>
                <h1>User not found</h1>
                <input type="submit" onClick={GoToRegister}>go to register</input>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1> Hello, {context.user.username}</h1>
            </div>
        )
    }
} 