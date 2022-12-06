import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/LoginPage.css';

const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		// TODO
		console.log('username', username);
		console.log('password', password);
	}

	return (

		<div className = "bank-app-div" id = "bank-app-overview-container">

			<div>
				<h1 className = "bank-app-title">Bank Application</h1>
			</div>

			<div className = "bank-app-div" id = "login-container">

				<form onSubmit = {(e) => onSubmit(e)}>

					<span id = "login-signIn-title">CREATE NEW ACCOUNT</span>

					<div className = "login-input-container">
						<input id = "username" type="username" name = "username" value = {username} onChange = {(e) => setUsername(e.target.value)} required/>
						<label id = "input-container-label" htmlFor = "username">Username</label>		
					</div>

					<br/><br/>
					<div className = "login-input-container">		
						<input id = "password" type="password" name = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
						<label id = "input-container-label">Password</label>
					</div>

					<br/><br/>
					<div className = "login-input-container">		
						<input id = "password" type="password" name = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
						<label id = "input-container-label">Confirm password</label>
					</div>

					<br/>
					<input className = "bank-app-buttons" type = "submit" value = "Register"/>

					<br/>
					<div className = "bank-app-div" id = "signUp-link-div">

						<label className = "bank-app-static-label"> Have an account? </label>

						<Link to="/login">
								<label className = "bank-app-static-label"> Log in</label>
						</Link>
					</div>
				</form>	
			</div>
		</div>
	)
};

export default RegisterPage;