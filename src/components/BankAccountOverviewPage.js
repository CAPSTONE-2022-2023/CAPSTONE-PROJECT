import React from 'react';
import { Link } from "react-router-dom";

import '../css/BankAccountOverview.css';

export default function BankAccountOverview() 
{
	return (

		<div class = "bank-account-div" id = "bank-account-overview-container">

			<div class = "bank-account-div" id = "bank-account-user-info-top">
				<h2 class = "bank-account-heading" id = "username-heading"> Welcome, [USERNAME] </h2>

				<Link to = "/">
					<button class = "bank-account-buttons" id = "bank-account-sign-out-button" type = "button"> Sign Out </button>
				</Link>
			</div>

			<br></br> <br></br>

			<div class = "bank-account-div" id = "bank-accounts-owned-middle">
				<h2 class = "bank-account-heading">Bank Accounts</h2>

				<div class = "bank-account-prefabs" id = "bank-account-prefab01">
					<h3 class = "bank-account-prefab-heading" id = "bank-account-heading-prefab01">Personal Savings Account</h3>
					<h3 class = "bank-account-prefab-number" id = "bank-account-number-prefab01">ID: ###-######</h3>
					<p class = "bank-account-prefab-balance" id = "bank-account-balance-prefab01"> $###.## </p>
				</div>

				<br></br><br></br>

				<div class = "bank-account-prefabs" id = "bank-account-prefab02">
					<h3 class = "bank-account-prefab-heading" id = "bank-account-heading-prefab02">Everyday Chequings Account</h3>
					<h3 class = "bank-account-prefab-number" id = "bank-account-number-prefab02">ID: ###-######</h3>
					<p class = "bank-account-prefab-balance" id = "bank-account-balance-prefab02"> $###.## </p>
				</div>

				<div class = "bank-account-create-new">
					<button class = "bank-account-buttons" id = "bank-account-create-new-account-button" type = "button"> Add New Account</button>
				</div>

				<div class = "bank-account-balance-total">
					<h3 class = "bank-account-balance-total-title">TOTAL: </h3>
					<p class = "bank-account-balance-total-amount"> $###.## </p>
				</div>
			</div>

			<br></br> <br></br>

			<div class = "bank-account-div" id = "credit-cards-owned-bottom">
				<h2 class = "bank-account-heading">Credit Cards</h2>

				<div class = "bank-account-prefabs" id = "credit-account-prefab01">
					<h3 class = "bank-account-prefab-heading" id = "credit-account-heading-prefab01">Standard Credit Card</h3>
					<h3 class = "bank-account-prefab-number" id = "credit-account-number-prefab01">#### #### #### ####</h3>
					<p class = "bank-account-prefab-balance" id = "credit-account-balance-prefab01"> $###.## </p>
				</div>

				<div class = "bank-account-create-new">
					<button class = "bank-account-buttons" id = "bank-account-create-new-account-button" type = "button"> Add New Account</button>
				</div>

				<div class = "bank-account-balance-total">
					<h3 class = "bank-account-balance-total-title">TOTAL: </h3>
					<p class = "bank-account-balance-total-amount"> $###.## </p>
				</div>
			</div>

		</div>

  	);
}