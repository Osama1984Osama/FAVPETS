import React from 'react'
import { useState,useContext ,useEffect} from 'react'
import axios from "axios"
function Reset() {
    const [user , setUser ] = useState({
        email: '',
    });
    const onChange = (e) => setUser({ ...user , [e.target.name]:e.target.value });
    const onSubmit = async (e) => {
        const {  email } = user;
            try {
                const config = {
                    headers: { "Content-Type": "application/json" },
                };
                const result = await axios.post(
                    "http://localhost:5000/user/forgotPassword",
                    user,
                    config
                );
                // window.location= '/newPassword'
            } catch (error) {
                alert(error.response.data.msg);
            }
        }
    return (
        <div className ="form-container">
        <h1>
             <span >Reset your Password</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Write your Email please</label>
                <input type="email" name="email" onChange={onChange}/>
            </div>
            <input type="submit" value="Login" className="btn btn-info btn-block"/>
        </form>
    </div>
    )
}
export default Reset;