import React from 'react'
import { useState,useContext ,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import AlertContext from "../../context/alert/alertContext";
import AuthContext from '../../context/auth/authContext';
import axios from "axios"
function NewPassword(props) {
    const [validToken , setValidToken] = useState(false)
    const { token } = useParams();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { addAlert } = alertContext;
    const [user , setUser ] = useState({
        password:'',
        password2: '',
        token:''
    });
    const {password,password2} = user;
    const sendResetToken = async() =>{
        const config = {
            'Content-Type':'application/json'
        }
        try {
            const response =await axios.get(`http://localhost:5000/user/newPassword/${token}`);
            console.log(response.data);
            setValidToken(true);
            setUser({...user , token})
            
        } catch (error) {
            console.log(error.response.data.msg);
            addAlert('error.response.data.msg','alert-infos')
            setValidToken(false)
        }
        
    }
    useEffect(()=>{
        console.log(token);
        if(token){
            sendResetToken();
        }

    },[])
    const onChange = (e) => setUser({ ...user , [e.target.name]:e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        const {password,password2} = user;
        if (password === ""|| password2 === "") {
            addAlert("please enter all the fields", " alert-infos");
        } else if (password !== password2) {
            addAlert("password do not match", " alert-infos");
        } else if (password.length < 7 || password2.length < 7) {
            addAlert("password must be more than 7 Character", " alert-infos");
        } else {
            
            try {
                const config = {
                    headers: { "Content-Type": "application/json" },
                };
                setUser({...user , token})
                const result = await axios.post(
                    "http://localhost:5000/user/resetPassWord",
                    user,
                    config
                );
                window.location = "/login";
                console.log(result);
            } catch (error) {
                addAlert(error.response.data.msg);
            }
        }
    }
    return (
        <div className ="form-container">
           { validToken ? 
           <> 
        <h1>
             <span >Enter new Password</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2"onChange={onChange}/>
            </div>
            <input type="submit" value="Send" className="btn btn-info btn-block"/>
        </form>
        </> 
         : <h1>
         <span >your token is not valid </span>
    </h1>}
    </div>
    )
}
export default NewPassword;