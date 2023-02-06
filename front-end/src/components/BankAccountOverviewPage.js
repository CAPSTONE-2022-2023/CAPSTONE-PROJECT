import React, { Component, useEffect, useState } from 'react';
import AddBankAccountOverlay from './AddBankAccountOverlay';
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

import '../css/BankAccountOverview.css';

var hasOpenedChequingsAccount = false;
var hasOpenedSavingsAccount = false;
var valueOfBalances = 0;

const hiddenStyle = "hidden";
const showAccountStyle = "bank-account-prefabs";

var chequingsAccountStyle = showAccountStyle;
var savingsAccountStyle = showAccountStyle;
var addBankAccountButtonStyle = "bank-app-buttons";

export default class BankAccountOverview extends Component
{
	constructor(props)
	{
		super(props);

		// When creating a new function, make sure to bind it using this format; otherwise, it will not work.
		// e.g. this.[functionName] = this.[functionName].bind(this); (remove the square brackets).
		this.updateUser = this.updateUser.bind(this);

		// Default state of the variable.
		this.state = 
		{
			user:
			{
				firstName: "",
				lastName: "",
				email: "",
				accounts: 
				[
					{id: 1, balance: 0},
					{id: 1, balance: 0}
				]
			}
		}	
	}

	// Built-in React function. Gets called after a component is mounted.
	componentDidMount()
	{
		const token = localStorage.getItem('token');
		var user;

		if (token) user = jwtDecode(token);
		else
		{
			alert("Your session has expired. Redirecting you to the Home Page...");
			window.location = '/';
		}

		if (user) this.updateUser(user);
	}

	// ADD ALL NEW FUNCTIONS UNDER THIS COMMENT HERE. MAKE SURE TO BIND THE FUNCTION IN THE CONSTRUCTOR.
	// When calling a function in a HTML tag (div, form, etc), type: {this.[functionName]} (Check the RegisterAccountPage.js script for examples)

	
	updateUser(newUser) 
	{
		this.setState( 
			{
				user: newUser
			} );
	}

	render()
	{
		return(
			
			<div className = "bank-app-div" id = "bank-app-overview-container">

				<div>
					<h1 className = "bank-app-title">Bank Application</h1>

					<Link to = "/">
						<button className = "bank-app-buttons" id = "bank-account-sign-out-button" type = "button"> Sign Out </button>
					</Link>

					<h3 id = "username-heading">{this.state.user.firstName + " " + this.state.user.lastName}</h3>
				</div>

				<br/><br/>

				{/* <AddBankAccountOverlay open = {isOpen} onClose = {() => setIsOpen(false)} accountAdded = {determineAccountToOpen}/> */}

				<div className = "bank-app-div" id = "bank-accounts-owned-middle">
					<h2 className = "bank-account-heading">Bank Accounts</h2>

					<div className = {savingsAccountStyle} id = "bank-account-prefab01">
						<h3 className = "bank-account-prefab-heading" id = "bank-account-heading-prefab01">Personal Savings Account</h3>
						<h3 className = "bank-account-prefab-number" id = "bank-account-number-prefab01">ID: 399-{this.state.user.accounts[1].id}</h3>
						<p className = "bank-account-prefab-balance" id = "bank-account-balance-prefab01"> ${this.state.user.accounts[1].balance}</p>
					</div>

					<form>
						<div>
							<label>Deposit</label>
							<input type="number" name="text" min='10' max='1000' placeholder='$Amount'/>
							<input type="submit" value="Submit" />

							<label>Withdraw</label>
							<input type="number" name="text" min='10' max='1000' placeholder='$Amount' />
							<input type="submit" value="Submit" />
						</div>
					</form>

					<br/><br/>

					<div className = {chequingsAccountStyle} id = "bank-account-prefab02">
						<h3 className = "bank-account-prefab-heading" id = "bank-account-heading-prefab02">Everyday Chequings Account</h3>
						<h3 className = "bank-account-prefab-number" id = "bank-account-number-prefab02">ID: 399-{this.state.user.accounts[0].id}</h3>
						<p className = "bank-account-prefab-balance" id = "bank-account-balance-prefab02"> ${this.state.user.accounts[0].balance} </p>
					</div>

					<form>
						<div>
							<label>Deposit</label>
							<input type="number" name="text" min='10' max='1000' placeholder='$Amount'/>
							<input type="submit" value="Submit" />

							<label>Withdraw</label>
							<input type="number" name="text" min='10' max='1000' placeholder='$Amount'/>
							<input type="submit" value="Submit" />
						</div>
					</form>
				
					<br/>
					{/* <div className = "bank-account-create-new">
						<button className = {addBankAccountButtonStyle} id = "bank-account-create-new-account-button" type = "button" onClick = {() => setIsOpen(true)}> Add New Account</button>
					</div> */}

					<div className = "bank-account-balance-total">
						<h3 className = "bank-account-balance-total-title">TOTAL: </h3>
						<p className = "bank-account-balance-total-amount"> ${valueOfBalances} </p>
					</div>
				</div>

				<br></br> <br></br>

				<div className = "bank-app-div" id = "credit-cards-owned-bottom">
					<h2 className = "bank-account-heading">Credit Cards</h2>

					<div className = "bank-account-prefabs" id = "credit-account-prefab01">
						<h3 className = "bank-account-prefab-heading" id = "credit-account-heading-prefab01">Standard Credit Card</h3>
						<h3 className = "bank-account-prefab-number" id = "credit-account-number-prefab01">#### #### #### ####</h3>
						<p className = "bank-account-prefab-balance" id = "credit-account-balance-prefab01"> $###.## </p>
					</div>

					<br/>
				
					<div className = "bank-account-create-new">
						<button className = "bank-app-buttons" id = "bank-account-create-new-account-button" type = "button"> Add New Account</button>
					</div>

					<div className = "bank-account-balance-total">
						<h3 className = "bank-account-balance-total-title">TOTAL: </h3>
						<p className = "bank-account-balance-total-amount">$0.00</p>
					</div>
				</div>
			</div>
		);
	}
}