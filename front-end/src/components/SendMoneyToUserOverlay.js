import React, { useState } from 'react'

import '../css/AddBankAccountOverlay.css';
import '../css/BankAccountOverview.css';

export default function SendMoneyToUser({open, onClose, sendMoney})
{
    const [moneySent, setMoneySent] = useState(0);
    const [email, setEmail] = useState("");

    if (!open) return null;

    const handleEmailChange = (event) =>
    {
        setEmail(event.target.value);
    }

    const handleMoneySentChange = (event) =>
    {
        setMoneySent(event.target.value);
    }

    const handleSubmit = () =>
	{
		sendMoney(email, moneySent)
	};

    return(
        <>
            <div id = "overlay-background"></div>

            <div id = "main-overlay">

                <label className="bank-app-label">Send To: </label>
                <input type = "text" value = {email} onChange = {handleEmailChange} placeholder = "Email address"></input>

                <br/><br/>
                <label className="bank-app-label">From Account:</label>
				<select className = "bank-account-dropdown">
					<option className = "bank-account-dropdown-option" value = "chequings">Chequings</option>
				</select>

                <br/><br/>
                <label>Amount: </label>
			    <input type="number" name = "deposit-amount" value = {moneySent} onChange = {handleMoneySentChange} min='1' max='10000' placeholder='Minimum of $1' />
                <br/><br/><br/>
				<button type = "submit" className = "bank-app-buttons" id = "overlayButton-openAccount" onClick = {handleSubmit} >Confirm</button>
				<button className = "bank-app-buttons" id = "overlayButton-exit" onClick = {onClose}>Cancel</button>
            </div>

        </>
        
    )
    
}