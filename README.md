# iSpentIt Web App

- Keep track of your personal expenses.
- You can add, inactivate(soft delete), delete(hard delete), restore the inactivated transaction.

## Created using the following technologies

- React
- Typescript
- Firebase/Firestore

## What all is covered ?
### `Login`
- Logs user in to the site using the firebase email/password authentication service.
- Captcha to avoid bot logins.
  
  ![Login Page](/src/assets/Login.png)
### `Signup`
- Basic information about the user required for signing up.
- Validation for missing required fields / incorrect data validation.
- Captcha field to avoid bot signups.

![Signup Page](/src/assets/Signup.png)
### `Home Page`
- Only available to logged in users.
- Unauthorized users are navigated to Login Page
- A user can add expenses.
- Keep a track of the total amount they have spend so far.
- Delete a transaction (soft delete)

![Home Page](/src/assets/Home.png)
### `Restore Deleted Transactions`
- User can either permanently delete a transaction or restore it.

![Restore Page](/src/assets/Restore.png)

### `Navbar for logged in users and new users`
- Dynamic Navbar based on the user's auth state.
  
![New Users](/src/assets/Navbar-LO.png)
![Authorized Users](/src/assets/Navbar-LI.png)

### `Project WebApp Link`

- Test out my project at [ISpentIt](https://i-spent-it.web.app)