import React,{ useState } from "react";

export const Login = () => {
    const {email,setEmail} = useState('');
    const { pass,setPass } = useState('');
    return (
        <form>
            <label for="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name ="email"></input>
            <label for="password">password</label>
            <input type="password" placeholder="******" id="password" name="password"></input>
            <button>Log In</button>
        </form>
    )
}