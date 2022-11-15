import React from 'react';
import { Link } from "react-router-dom";

export default function Home() 
{
	return (

		<div>
			<h1>THIS IS THE HOME PAGE!</h1>
			<Link to = "/bankAccountOverview">
				<button type = "button">Bank Account Overview </button>
			</Link>
		</div>

  	);
}