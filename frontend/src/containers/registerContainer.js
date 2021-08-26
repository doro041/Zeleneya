import React, {useState} from 'react';
import { Register } from '../components/Register/register';

export const RegisterContainer = ({onSubmit}) => {
    const [registerUsername, setUsername] = useState("");
    const [registerEmail, setEmail] = useState("");
    const [registerPassword, setPassword] = useState("");

    const onChangeUsername = (e) => {
        setUsername({registerUsername: e.target.value})
    }

    const onChangePassword = (e) => {
        setPassword({registerPassword: e.target.value})
    }

    const onChangeEmail = (e) => {
        setEmail({registerEmail: e.target.value})
    }

     const submitForm = (e) => {
         e.preventDefault()
        onSubmit(registerPassword, registerUsername, registerEmail)
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