import React, { useEffect, useState } from 'react';
import AddBankAccountOverlay from './AddBankAccountOverlay';
import { Link, useNavigate } from "react-router-dom";
// import jwt from 'jsonwebtoken';

import '../css/BankAccountOverview.css';

var hasOpenedChequingsAccount = false;
var hasOpenedSavingsAccount = false;
var valueOfBalances = 0;

const hiddenStyle = "hidden";
const showAccountStyle = "bank-account-prefabs";

var chequingsAccountStyle = hiddenStyle;
var savingsAccountStyle = hiddenStyle;
var addBankAccountButtonStyle = "bank-app-buttons";

// const navigate = useNavigate(); 

export default function BankAccountOverview() 
{

	// useEffect(() => 
	// {
	// 	const token = localStorage.getItem('token');

	// 	if (token)
	// 	{
	// 		const user = jwt.decode(token);
	// 		if (!user)
	// 		{
	// 			localStorage.removeItem('token');
	// 			navigate('/login')
	// 		}
	// 		// else
	// 		// {
	// 		// 	populateBankAccountOverview();
	// 		// }
	// 	}
	// }, [])

	const [isOpen, setIsOpen] = useState(false);

	const determineAccountToOpen = (accountChosen) =>
	{
		if (accountChosen === "chequings" && !hasOpenedChequingsAccount)
		{
			hasOpenedChequingsAccount = true;
			valueOfBalances += 100;
			chequingsAccountStyle = showAccountStyle;
		}

		if (accountChosen === "savings" && !hasOpenedSavingsAccount)
		{
			hasOpenedSavingsAccount = true;
			valueOfBalances += 100;
			savingsAccountStyle = showAccountStyle;
		}

		if (hasOpenedChequingsAccount && hasOpenedSavingsAccount)
		{
			addBankAccountButtonStyle = hiddenStyle;
		}
	};

	return (

		<div className = "bank-app-div" id = "bank-app-overview-container">

			<div>
				<h1 className = "bank-app-title">Bank Application</h1>

				<Link to = "/">
					<button className = "bank-app-buttons" id = "bank-account-sign-out-button" type = "button"> Sign Out </button>
				</Link>

				<h3 id = "username-heading"> [USERNAME] </h3>

			</div>

			<br/><br/>

			<AddBankAccountOverlay open = {isOpen} onClose = {() => setIsOpen(false)} accountAdded = {determineAccountToOpen}/>

			<div className = "bank-app-div" id = "bank-accounts-owned-middle">
				<h2 className = "bank-account-heading">Bank Accounts</h2>

				<div className = {savingsAccountStyle} id = "bank-account-prefab01">
					<h3 className = "bank-account-prefab-heading" id = "bank-account-heading-prefab01">Personal Savings Account</h3>
					<h3 className = "bank-account-prefab-number" id = "bank-account-number-prefab01">ID: 399-145723</h3>
					<p className = "bank-account-prefab-balance" id = "bank-account-balance-prefab01"> $100.00</p>
				</div>

				<br/><br/>

				<div className = {chequingsAccountStyle} id = "bank-account-prefab02">
					<h3 className = "bank-account-prefab-heading" id = "bank-account-heading-prefab02">Everyday Chequings Account</h3>
					<h3 className = "bank-account-prefab-number" id = "bank-account-number-prefab02">ID: 399-145724</h3>
					<p className = "bank-account-prefab-balance" id = "bank-account-balance-prefab02"> $100.00 </p>
				</div>
				
				<br/>
				<div className = "bank-account-create-new">
					<button className = {addBankAccountButtonStyle} id = "bank-account-create-new-account-button" type = "button" onClick = {() => setIsOpen(true)}> Add New Account</button>
				</div>

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