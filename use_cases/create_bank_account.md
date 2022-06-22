## Create Bank Account [by Matthew Samun]

### Actor (User)
User with a valid account.

### Pre-conditions
- User must be logged into the system.

### Main Flow
1. The user clicks on "Create New Account" button on the "Account Details" page.
2. The system loads and prompts user to choose account type.
3. The user chooses which account type they want.
4. The system verifies information to ensure user is able to create account with specified type.
5. The system generates a new ID for the account, goes back to "Account Details" page, and displays a notification at the bottom of the screen informing the user that the account has been successfully created.

### Alternate Flow
- If the user attempts to create an account that they are not qualified for (non-student attempting to create a student account):
  - After Step 4, the system will throw an error on the screen informing the user they cannot create account of chosen type, then goes back to Step 2.
- If the user attempts to create an account, but has reached the maximum amount of accounts:
  - After Step 1, the system will tell the user that they are unable to create a new account as they have reached the maximum amount of accounts.
- If the user changes their mind and cancels the account creation process.
  - The system will simply go back to the "Account Details" page.

### Post Conditions
The user successfully creates a new bank account; the database updates the user's account information to showcase the new changes made.
