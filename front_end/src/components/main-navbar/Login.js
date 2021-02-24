import React from 'react'
import { useState, useContext, useEffect } from 'react'
import AlertContext from "../../context/alert/alertContext";
import AuthContext from '../../context/auth/authContext';
//import "bootstrap/dist/css/bootstrap.min.css";

import './Login.css'

function Login(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { login, error, isAuthenticated } = authContext
    const { addAlert } = alertContext;
    const [user, setUser] = useState({
        email: '',
        password: ''

    });
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

    }, [isAuthenticated])
    const { email, password } = user;
    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        console.log(user);
        if (email === "" || password === "") {
            addAlert("please enter all the fields", " alert-info");
        } else {
            login({ email, password })
            if (error) {
                addAlert(error, 'danger')
            }

             
        }

    }

    const reset = ()=>{
        props.history.push('/reset')
    }
    return (
        <div className="form-container  login-1">
            <h1>
                <span > Login </span>
            </h1>
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChange} />
                </div>


                <input type="submit" value="Login" className="btn btn-info btn-block " id='btn11' />
            </form>

            <div className='mainReset'>
                <p className='textReset'>Forgot your Password ?</p>
                <button className='btnReset' onClick={reset}>Click Here</button>
            </div>

        </div>
    )
}

export default Login
