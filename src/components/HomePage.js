import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<h1>THIS IS THE HOME PAGE!</h1>
			<Link to="/login">
				<button type="button">Login</button>
			</Link>
			<Link to="/login">
				<button type="button">Logout</button>
			</Link>
		</div>
	);
};

export default HomePage;