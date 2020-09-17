import React, { useState, useEffect } from 'react';
import '../styling/Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../state/firebase';
import { useStateValue } from '../state/StateProvider';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [{user}] = useStateValue();
    useEffect(() => {
        if(user){
            history.push("/");
        }
    });
    
    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                //logged in
                history.goBack();
            })
            .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                //user created
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="login logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's 
                    Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                
            </div>
        </div>
    )
}

export default Login
