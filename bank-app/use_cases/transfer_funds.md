## Transfer Funds [by Matthew Samun]

### Actor (User)
User with a valid account.

### Pre-conditions
User must be logged into the system; user must have two or more bank accounts.

### Main Flow
1. The user clicks on the "Transfer Funds" button on the website's "Account Details" page.
2. The system loads and displays list of current accounts owned by the user.
3. The user chooses which account to transfer money from, and which account to transfer money to.
4. The system prompts the user to enter the amount of money they wish to transfer.
5. The user enters the amount of money to transfer.
6. The system asks the user to review and confirm details.
7. After the user confirms their choice, the system goes back to the "Account Details" page and displays a notification at the bottom of the screen, letting the user know that the funds have been successfully transferred.

### Alternate Flow
- If the user does not have more than $1 in the account they wish to transfer money from:
  - After Step 5, the system will throw an error on the screen, telling the user that the minimum amount of money has not been met.

### Post Conditions
The user successfully transfers funds from one account to another; the database updates the account information to properly showcase changes.
