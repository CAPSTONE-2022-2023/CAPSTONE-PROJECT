import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/LoginPage.css';
import validateRegisterPage from '../utils/validateRegisterPageInput';

export default class RegisterPage extends Component
{
	constructor(props)
	{
		super(props);

		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this); 

		this.state = 
		{
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			fieldErrors: []
		}
	}

	onChangeFirstName(e)
	{ 
		this.setState({firstName: e.target.value});
	}

	onChangeLastName(e)
	{
		this.setState({lastName: e.target.value});
	}

	onChangeEmail(e)
	{
		this.setState({email: e.target.value});
	}

	onChangePassword(e)
	{
		this.setState({password: e.target.value});
	}

	onChangeConfirmPassword(e)
	{
		this.setState({confirmPassword: e.target.value});
	}

	async onSubmit(e)
	{
		e.preventDefault();

		const user = 
		{
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		}

		// Go to src/utils/validateRegisterPageInput.js to see what the validateRegisterPage() function is doing.
		const {fieldInputErrors, isDataValid} = validateRegisterPage(user);

		this.setState(
			{
				fieldErrors: [fieldInputErrors.firstName, fieldInputErrors.lastName, fieldInputErrors.email, 
					fieldInputErrors.password, fieldInputErrors.confirmPassword]
			});

		// If the data provided to the Register Page is valid and passed all the checks, send a POST request to the database to upload the user to the MongoDB database.
		// which is located in backend/routes/register.js
		if (isDataValid)
		{
			console.log(user);

			await axios.post("https://localhost:5000/register/add", user).then(res => 
			{
				alert("User added! Continue to be redirected to the Login page.");
				console.log(res.data)
				window.location = "/login";
			})
			.catch(() => alert("Account creation failed! Please try again."));
		}
	}

	render()
	{
		return (

			
			<div className = "bank-app-div" id = "bank-app-overview-container">

				<div>
					<h1 className = "bank-app-title">Bank Application</h1>
				</div>

				<div className = "bank-app-div" id = "login-container">

					<form onSubmit = {this.onSubmit}>

						<span id = "login-signIn-title">CREATE NEW ACCOUNT</span>

						<div className = "login-input-container">
							<input id = "userfirstName" type = "text" name = "userfirstName" value = {this.state.firstName} onChange = {this.onChangeFirstName} required/>
							<label id = "input-container-label" htmlFor = "userfirstName">*First Name</label>
							<span id = "inputField-error">{this.state.fieldErrors[0]}</span>
						</div>

						<br/>
						<div className = "login-input-container">
							<input id = "userlastName" type = "text" name = "userlastName" value = {this.state.lastName} onChange = {this.onChangeLastName} required/>
							<label id = "input-container-label" htmlFor = "userlastName">*Last Name</label>
							<span id = "inputField-error">{this.state.fieldErrors[1]}</span>
						</div>

						<br/>
						<div className = "login-input-container">
							<input id = "userEmail" type = "email" name = "userEmail" value = {this.state.email} onChange = {this.onChangeEmail} required/>
							<label id = "input-container-label" htmlFor = "userEmail">*Email Address</label>
							<span id = "inputField-error">{this.state.fieldErrors[2]}</span>	
						</div>

						<br/>
						<div className = "login-input-container">		
							<input id = "password" type="password" name = "password" value = {this.state.password} onChange = {this.onChangePassword} required/>
							<label id = "input-container-label">*Password</label>
							<span id = "inputField-error">{this.state.fieldErrors[3]}</span>
						</div>

						<br/>
						<div className = "login-input-container">		
							<input id = "password" type="password" name = "password" value = {this.state.confirmPassword} onChange = {this.onChangeConfirmPassword} required/>
							<label id = "input-container-label">*Confirm password</label>
							<span id = "inputField-error">{this.state.fieldErrors[4]}</span>
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
	}
}