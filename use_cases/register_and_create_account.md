## Registering and creating a customer account (done by Gaurav Saini)
### Actors(customer)
### Pre-conditions
Customer must have a client card number in order to create an account.
### Mainflow
1. Customer clicks the register button
2. The system loads a form for the customer to fill with personal details
3. Customer fills in their personal details
4. The system asks customer to confirm details 
5. Customer clicks confirm button.
6. The system validates the customers entries
7. The system creates the customer account
### Alternate Flow
- Invalid client card number:

If the customer inputs the wrong client card number the system will display an error telling the customer "invalid card number" and will keep displaying the error until the valid client card number isn't provided
- Weak Password:

If the customers password strength is weak the system will give errors warning the customer to increase the strength of their password and won't let them proceed until the minimum password strength isn't met.
- Customer doesn't click confirm details:

If the customer doesn't click the confirm details button they will have to redue step 3 and make sure they click confirm details or else they will keep looping on step 3.
- Unsuccessful validation

If the system was unsuccessful at validating the provided details by the customer it will point out the error and will as the customer to fix it.
### Postconditions
Once the customer registers and creates their account they should be able to successfully login to the system and be able to view their (account balance, statements, along with options to tranfer funds, etc...)
