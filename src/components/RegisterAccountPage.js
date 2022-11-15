import React, { useState } from 'react';
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
		<div id="login-container">
			<h1 className="title">Bank App</h1>
			<form id="login" onSubmit={(e) => onSubmit(e)}>
				<label htmlFor="username">Username: </label>
				<input id="username" type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label htmlFor="username">Password: </label>
				<input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
};

export default RegisterPage;