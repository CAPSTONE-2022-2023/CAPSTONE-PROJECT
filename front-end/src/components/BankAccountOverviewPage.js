import React, { Component, useEffect, useState } from 'react';
import AddBankAccountOverlay from './AddBankAccountOverlay';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import '../css/BankAccountOverview.css';

var hasOpenedChequingsAccount = false;
var hasOpenedSavingsAccount = false;

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
		this.updateDepositForSavingsAccount = this.updateDepositForSavingsAccount.bind(this);
		this.updateWithdrawForSavingsAccount = this.updateWithdrawForSavingsAccount.bind(this);
		this.updateDepositForchequingAccount = this.updateDepositForchequingAccount.bind(this);
		this.updateWithdrawForchequingAccount = this.updateWithdrawForchequingAccount.bind(this);
		this.updateUserInDatabase = this.updateUserInDatabase.bind(this);

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
		this.setState({ user: newUser });
	}

	updateUserInDatabase(e)
	{
		e.preventDefault();

		axios.post("http://localhost:5000/register/update", this.state.user).then(() => 
			{
				alert("Data updated.");
			})
			.catch((err) => alert("Unable to update balance to database.\n" + err));
	}

	updateDepositForSavingsAccount(e)
	{
		// Prevent page from reloading
		e.preventDefault();

		// Extract the value from the form
		const form = e.target;
		const depositAmount = +Object.fromEntries(new FormData(form))['deposit-amount'];
		
		// Reset the form
		form.reset();

		if (isNaN(depositAmount)) {
			return alert('Not valid deposit amount');
		}

		// Get the right account
		const chequingAccount = this.state.user.accounts[0];
		const savingsAccount = this.state.user.accounts[1];

		// Update the account balance
		savingsAccount.balance += depositAmount;

		// Save the data
		// TODO: Change this to API Call
		this.setState({ user: { ...this.state.user, accounts: [chequingAccount, savingsAccount]}});
		this.updateUserInDatabase(e);
	}

	updateWithdrawForSavingsAccount(e)
	{
		
		// Prevent page from reloading
		e.preventDefault();

		// Extract the value from the form
		const form = e.target;

		// const a = "100";
		// +a === 100;
		const withdrawAmount = +Object.fromEntries(new FormData(form))['withdraw-amount'];
		
		// Reset the form
		form.reset();

		if (isNaN(withdrawAmount)) {
			return alert('Not valid withdraw amount');
		}

		// Get the right account
		const chequingAccount = this.state.user.accounts[0];
		const savingsAccount = this.state.user.accounts[1];

		// Update the account balance
		savingsAccount.balance -= withdrawAmount;

		// Save the data
		// TODO: Change this to API Call
		this.setState({ user: { ...this.state.user, accounts: [chequingAccount, savingsAccount]}});
		this.updateUserInDatabase(e);
	}

	updateDepositForchequingAccount(e)
	{
		// Prevent page from reloading
		e.preventDefault();

		// Extract the value from the form
		const form = e.target;
		const depositAmount = +Object.fromEntries(new FormData(form))['deposit-amount'];
		
		// Reset the form
		form.reset();

		// Get the right account
		const chequingAccount = this.state.user.accounts[0];
		const savingsAccount = this.state.user.accounts[1];

		// Update the account balance
		chequingAccount.balance += depositAmount;

		// Save the data
		// TODO: Change this to API Call
		this.setState({ user: { ...this.state.user, accounts: [chequingAccount, savingsAccount]}});
		this.updateUserInDatabase(e);
	}

	updateWithdrawForchequingAccount(e)
	{
		
		// Prevent page from reloading
		e.preventDefault();

		// Extract the value from the form
		const form = e.target;

		// const a = "100";
		// +a === 100;
		const withdrawAmount = +Object.fromEntries(new FormData(form))['withdraw-amount'];
		
		// Reset the form
		form.reset();

		// Get the right account
		const chequingAccount = this.state.user.accounts[0];
		const savingsAccount = this.state.user.accounts[1];

		// Update the account balance
		chequingAccount.balance -= withdrawAmount;

		// Save the data
		// TODO: Change this to API Call
		this.setState({ user: { ...this.state.user, accounts: [chequingAccount, savingsAccount]}});
		this.updateUserInDatabase(e);
	}

	calculateAccountTotal() {
		// Get the right account
		const chequingAccountBalance = this.state.user?.accounts[0].balance ?? 0;
		const savingsAccountBalance = this.state.user?.accounts[1].balance ?? 0;

		const total = chequingAccountBalance + savingsAccountBalance;

		// sets it to two decimal places
		return total.toFixed(2);
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

					<div>
					<form onSubmit={this.updateDepositForSavingsAccount}>
							<label>Deposit</label>
							<input type="number" name="deposit-amount" min='10' max='1000' placeholder='$10'/>
							<input type="submit" value="Submit" />
					</form>

						<form onSubmit={this.updateWithdrawForSavingsAccount}>
							<label>Withdraw</label>
							<input type="number" name="withdraw-amount" min='10' max='1000' placeholder='$10' />
							<input type="submit" value="Submit" />
						</form>
					</div>

					<br/><br/>

					<div className = {chequingsAccountStyle} id = "bank-account-prefab02">
						<h3 className = "bank-account-prefab-heading" id = "bank-account-heading-prefab02">Everyday Chequings Account</h3>
						<h3 className = "bank-account-prefab-number" id = "bank-account-number-prefab02">ID: 399-{this.state.user.accounts[0].id}</h3>
						<p className = "bank-account-prefab-balance" id = "bank-account-balance-prefab02"> ${this.state.user.accounts[0].balance} </p>
					</div>

   					<div>
					<form onSubmit={this.updateDepositForchequingAccount}>
							<label>Deposit</label>
							<input type="number" name="deposit-amount" min='10' max='1000' placeholder='$10'/>
							<input type="submit" value="Submit" />
					</form>

						<form onSubmit={this.updateWithdrawForchequingAccount}>
							<label>Withdraw</label>
							<input type="number" name="withdraw-amount" min='10' max='1000' placeholder='$10' />
							<input type="submit" value="Submit" />
						</form>
					</div>
				
					<br/>
					{/* <div className = "bank-account-create-new">
						<button className = {addBankAccountButtonStyle} id = "bank-account-create-new-account-button" type = "button" onClick = {() => setIsOpen(true)}> Add New Account</button>
					</div> */}

					<div className = "bank-account-balance-total">
						<h3 className = "bank-account-balance-total-title">TOTAL: </h3>
						<p className = "bank-account-balance-total-amount"> ${this.calculateAccountTotal()} </p>
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