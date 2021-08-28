import React, {useState} from 'react';
import { Register } from '../components/Register/register';

export const RegisterContainer = ({onSubmit}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        setUsername({username: e.target.value})
    }

    const onChangePassword = (e) => {
        setPassword({password: e.target.value})
    }

    const onChangeEmail = (e) => {
        setEmail({email: e.target.value})
    }

     const submitForm = (e) => {
         e.preventDefault()
         
        onSubmit(username, email, password)
    }

    return(
        <Register 
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onChangeEmail={onChangeEmail}
        submitForm={submitForm}
        />
    )
}