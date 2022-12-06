import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const navigate = useNavigate();


	const onSubmit = (e) => {
		e.preventDefault();

		// TODO
		if (username === "BOB" && password === "1234") {
			navigate("/bankAccountOverview")

		}

		else {
			setError("Incorrect username or password")
		}

	}

	return (
		<div id="login-container">
			<h1 className="title">Login to the Bank App</h1>
			<form id="login" onSubmit={(e) => onSubmit(e)}>
				<label htmlFor="username">Username: </label>
				<input id="username" type="username" name="username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label htmlFor="username">Password: </label>
				<input id="password" type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<input type="submit" value="Login" />
				<div>
					Don't have an account? <Link to="/register">Sign Up</Link>
				</div>
				<div>
					{error}
				</div>
			</form>
		</div>
	)
};

export default LoginPage;
