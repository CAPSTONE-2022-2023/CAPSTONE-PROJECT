This file is meant to showcase and list all the specifications and features we have planned for the Bank Website. There are two sections: <i>Bare Minimum</i> and <i>Additions</i>.

All features listed under the *Bare Minimum* section will be implemented by the end of the development cycle.

All features listed under the *Additions* section are features we will work on only after everything under the *Bare Minimum* section gets implemented. Because of this, not every feature in the *Additions* section may be implemented.

**NOTE: This list is subject to change and does not represent everything we plan on adding to the website.**
___

### BARE MINIMUM

**Home Page**
- Shows Login Button and Register Button.
  
**Login Page**
- User needs to enter email/password to login.
  
**Register**
- Create account: user enters email, password, phone number.
- System randomly generates account ID.
  
**Account Details**
- By default, everyone has a chequing account with X amount of money.
- Open new accounts:
  - Savings
  - Credit Card
- Shows current amount of money in all accounts.
  
**Statements**
- Show transactions on account (amount deposited and amount withdrew).
  - Transactions detail info about who deposited/withdrew money.

**Deposits**
- Input amount to deposit via input field. Choose account to deposit money into.

**Withdrawls**
- Input amount to withdraw via input field. Choose account to withdraw money from.

**Logout Page**
- Takes you back to home page.

___
### ADDITIONS

**Homepage**
- Advertisements of type of accounts available (i.e. student discounts, insurance, etc).

**Login Page**
- Use 2FA when logging into account; send code to phone number/email that needs to be inputted by user.

**Register**
- Send verification email.
- Use verification to check password strength (must have one uppercase, one number, one special, minimum 10 characters).

**Account Details**
- Show last statement that was paid (credit card).
- Show upcoming statements.
- Track amount of money in user's accounts.
	- Minimum amount of money must be in user's account. Otherwise, notification of closure in X days.
- Create student account.
- Create a joint account.

**Transfers**
- Move from savings to chequings.
- Send money to another account thats in our database.
- Send money to another account outside Canada (simply subtract).

**Deposits**
- Cheques via input fields; choose which account to deposit.
