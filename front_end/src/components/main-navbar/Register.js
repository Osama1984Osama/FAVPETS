
import React from 'react'
import { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css'
function Register() {
    const alertContext = useContext(AlertContext);
	const { addAlert } = alertContext;
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = user;
	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			addAlert("please enter all the fields", " alert-infos");
		} else if (password !== password2) {
			addAlert("password do not match", " alert-infos");
		} else if (password.length < 7) {
			addAlert("password must be more than 7 Character", " alert-infos");
		} else {
			const user = { name, email, password, password2 };
			try {
				const config = {
					headers: { "Content-Type": "application/json" },
				};
				const result = await axios.post(
					"http://localhost:5000/user/register",
					user,
					config
				);
				window.location = "/login";

				console.log(result);
			} catch (error) {
				addAlert(error.response.data.msg);
			}
		}
	};
    return (
        <div className ="form-container">
        <h1>
           <span > Register Now </span>
        </h1>
        <form  onSubmit={onSubmit}>
            <div className="form-group ">
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address :</label>
                <input type="email" name="email" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password :</label>
                <input type="password" name="password2" onChange={onChange}/>
            </div>
            <input type="submit" value="Register" className="btn btn-info btn-block" id='btn11' />
        </form>
    </div>
    )
}
export default Register