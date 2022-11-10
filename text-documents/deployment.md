## MERGING

- We will use Git to merge all changes from local environment to production (GitHub).
- Whenever a new feature has been completed in a local environment, it will have its own dedicated branch for review.
- When the new feature passes all unit tests and has been manually reviewed and approved, it will be merged from its branch to the main development branch after creating a pull request.

## DEPLOYMENT

- We will use GitHub Actions to automate the deployment of the code to the Heroku app. Any merges made to the main development branch will be automatically moved to the Heroku app.
- All whitebox testing will be done in the local environment; all blackbox testing will be done on the production side (Heroku app).
- We will also integrate GitHub with Heroku to manually deploy the app through the terminal in Visual Studio Code. We will use this [link](https://devcenter.heroku.com/articles/git) as a reference.
- Here are the following steps (in order) to setup Heroku with GitHub:
  - Push all local changes to GitHub repo.
  - Create and setup Heroku app.
  - Login to Heroku through Visual Studio Code terminal.
  - Link Heroku to the GitHub repo using a command in the Visual Studio Code terminal.
  - Manually push changes to Heroku app through a command in Visual Studio Code.
