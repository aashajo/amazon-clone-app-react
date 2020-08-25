import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = e => {
        e.preventDefault(); //stops the refresh !
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged successfully, redirect to homepage..
            history.push('/'); //redirect
        })
        .catch(e=> alert(e.message));
    }

    const register = e => {
        e.preventDefault(); //stops the refresh !
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //user created and logged in..
            history.push('/');
        })
        .catch(e=> alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button type="submit" className="signin_button" onClick={signin}>Sign-in</button>
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. 
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button type="submit" className="register_button" onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
