import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
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
			<h1 className="title">Login to the Bank App</h1>
			<form id="login" onSubmit={(e) => onSubmit(e)}>
				<label htmlFor="username">Username: </label>
				<input id="username" type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label htmlFor="username">Password: </label>
				<input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<Link to = "/bankAccountOverview"> <input type="submit" value="Login" /> </Link>
				<div>
					Don't have an account? <Link to="/register">Sign Up</Link>
				</div>
			</form>
		</div>
	)
};

export default LoginPage;
