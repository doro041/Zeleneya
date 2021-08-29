import React from 'react';
import './styles.css';

export const Login = ({
    onChangeEmail,
    onChangePassword,
    submitForm,
    }) => {

    return(
        <div className="login-screen">
            <div>
                <h2 className="greeting">Добре дошли във</h2>
            </div>
            <div>
                <h1 className="app-name">Зеленея</h1>
            </div>
        <form  onSubmit={submitForm}>
                <label className="username">
                <div>
                <p>
                Електронна поща
                </p>
                </div>
                <div>
                <input className="usernameInput" type="email" name="name"  onChange={onChangeEmail}/>
            </div>
        </label>
             <div>
                 <label>
                     <div>
                         </div>
           <p> 
                Парола
               </p>
        <input type="password" name="password"  onChange={onChangePassword}/>
        </label>
         </div>
        <button className="entry-button" type="submit">Вход</button>
        </form>
            <div>
                <p>Създрай профил</p>
            </div>
            </div>
    )
}