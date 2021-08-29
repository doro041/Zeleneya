import React from 'react';


export const Register = ({
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
    submitForm,
    }) => {

    return(
        <form  onSubmit={submitForm}>
         <label>
            Username:
        <input type="text" name="name"  onChange={onChangeUsername}/>
        </label>
        <label>
            Email:
        <input type="email" name="email"  onChange={onChangeEmail}/>
        </label>
        <label>
            Password:
        <input type="password" name="password"  onChange={onChangePassword}/>
        </label>
        <button type="submit">Submit</button>
        </form>
    )
}