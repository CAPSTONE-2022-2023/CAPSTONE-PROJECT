import React, { useState } from 'react'
import axios from "axios"
const SendChequeToUserOverlay = ({ onClose, open }) => {

    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [amount, setamount] = useState('')
    const [page, setpage] = useState(1)
    const [accountType, setaccountType] = useState('chequings')
    const [chequeId, setchequeId] = useState('')
    return (
        <>{
            open ? <>
                <div id="overlay-background"></div>

                <div id="main-overlay">

                    <label className="bank-app-label">First Name : </label>
                    <input type="text" value={first_name} onChange={(e) => setfirst_name(e.target.value)} placeholder="First Name"></input>

                    <br /><br />
                    <label className="bank-app-label">Last Name : </label>
                    <input type="text" value={last_name} onChange={(e) => setlast_name(e.target.value)} placeholder="Last Name"></input>

                    <br /><br />
                    <label className="bank-app-label">Deposit to:</label>
                    <select className="bank-account-dropdown" value={accountType} onChange={(e) => { setaccountType(e.target.value) }}>
                        <option className="bank-account-dropdown-option" value="chequings">Chequings</option>
                        <option className="bank-account-dropdown-option " style={{ marginTop: "10px" }} value="savings">Savings</option>
                    </select>

                    <br /><br />
                    <label>Cheque ID: </label>
                    <input type="text" value={chequeId} onChange={(e) => setchequeId(e.target.value)} placeholder='Cheque ID' />
                    <br /><br /><br />
                    <label>Page #: </label>
                    <input type="number" name="page #" value={page} onChange={(e) => setpage(e.target.value)} min='10' max='100' placeholder='Minimum #1' />
                    <br /><br /><br />
                    <label>Amount: </label>
                    <input type="number" name="deposit-amount" value={amount} onChange={(e) => setamount(e.target.value)} min='10' max='10000' placeholder='Minimum of $10' />
                    <br /><br /><br />
                    <button type="submit" className="bank-app-buttons" id="overlayButton-openAccount" onClick={async () => {
                      try {
                        const response = await axios.post('http://localhost:5000/bank/depositcheque', {
                        firstName:first_name,
                          lastName:last_name,
                          chequeId,
                          accountType,
                          page,
                          amount
                        }, {
                          headers: {
                            token: localStorage.getItem('token')
                          }
                        });
                      
                        if (response.data.success === true) {
                          alert(response.data.message);
                          window.location.reload()
                        }
                      } catch (error) {
                        console.log(error)
                        alert(error.response.data.message);
                      }
                      
                    }} >Confirm</button>
                    <button className="bank-app-buttons" id="overlayButton-exit" onClick={onClose}>Cancel</button>
                </div>

            </> : ""
        }

        </>
    )
}

export default SendChequeToUserOverlay