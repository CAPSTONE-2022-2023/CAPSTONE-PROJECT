## Registering and creating a user account (done by Gaurav Saini)
### Actors(User)
Customer with a client card number
### Pre-conditions
User must have a client card number in order to create an account.
### Mainflow
1. User clicks the register button
2. The system loads a form for the user to fill with personal details
3. User fills in their personal details
4. The system asks user to confirm details 
5. User clicks confirm button.
6. The system validates the user entries
7. The system creates the user account
### Alternate Flow
- Invalid client card number:

If the user inputs the wrong client card number the system will display an error telling the user "invalid card number" and will keep displaying the error until the valid client card number isn't provided
- Weak Password:

If the user password strength is weak the system will give errors warning the user to increase the strength of their password and won't let them proceed until the minimum password strength isn't met.
- User doesn't click confirm details:

If the user doesn't click the confirm details button they will have to redue step 3 and make sure they click confirm details or else they will keep looping on step 3.
- Unsuccessful validation

If the system was unsuccessful at validating the provided details by the user, it will point out the error and will ask the user to fix it.
### Postconditions
Once the user registers and creates their account they should be able to successfully login to the system and be able to view their (account balance, statements, along with options to tranfer funds, etc...)
