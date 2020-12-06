import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './css/Login.css';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) =>{
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login_container">

                <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="logo" />

                <h1>Sign in to [company] slack</h1>
                <p>company.slack.com</p>

                <button onClick={signIn}>Sign in with Google</button>

            </div>
        </div>
    )
}

export default Login;
