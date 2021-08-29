import React, {useState} from 'react';
import { Login } from '../components/Login/login';

export const LoginContainer = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail({email: e.target.value})
    }

    const onChangePassword = (e) => {
        setPassword({password: e.target.value})
    }
     const submitForm = (e) => {
         e.preventDefault()
        onSubmit(email, password)
    }

    return(
        <Login 
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        submitForm={submitForm}
        />
    )
}