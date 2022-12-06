import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/LoginPage.css';

const LoginPage = () => 
{
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const navigate = useNavigate();

	const onSubmit = (e) => 
	{
		e.preventDefault();

		// TODO
		if (username === "BOB" && password === "1234") 
		{
			navigate("/bankAccountOverview")
		}

		else 
		{
			setError("Incorrect username or password")
		}

	}

	return (
		<div className = "bank-app-div" id = "bank-app-overview-container">

			<div>
				<h1 className = "bank-app-title">Bank Application</h1>
			</div>

			<div className = "bank-app-div" id = "login-container">

				<form onSubmit = {(e) => onSubmit(e)}>

					<span id = "login-signIn-title">Sign In</span>

					<div className = "login-input-container">
						<input id = "username" type="username" name = "username" value = {username} onChange = {(e) => setUsername(e.target.value)} required/>
						<label id = "input-container-label" htmlFor = "username">Username</label>		
					</div>

					<br/><br/>
					<div className = "login-input-container">		
						<input id = "password" type="password" name = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
						<label id = "input-container-label">Password</label>
					</div>

					<br/>
					<input className = "bank-app-buttons" type = "submit" value = "Login"/>

					<br/>
					<div className = "bank-app-div" id = "signUp-link-div">

						<label className = "bank-app-static-label"> Don't have an account? </label>

						<Link to="/register">
								<label className = "bank-app-static-label">Sign Up</label>
						</Link>

						<br/><br/>
						<span id = "errorMessage-text"> {error} </span>
					</div>
				</form>	
			</div>
		</div>
	)
};

export default LoginPage;
