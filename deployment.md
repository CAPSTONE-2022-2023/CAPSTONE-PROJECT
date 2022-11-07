## MERGING

- We will use Git to merge all changes from local environment to production (GitHub).
- Whenever a new feature has been completed in a local environment, it will have its own dedicated branch for review.
- When the new feature passes all unit tests and has been manually reviewed and approved, it will be merged from its branch to the main development branch after creating a pull request.

## DEPLOYMENT

- We will use GitHub Actions to automate the deployment of the code to the Heroku app. Any merges made to the main development branch will be automatically moved to the Heroku app.
- All whitebox testing will be done in the local environment; all blackbox testing will be done on the production side (Heroku app).
- We will also integrate GitHub with Heroku to automate the deployment process. We will be using [this link](https://devcenter.heroku.com/articles/github-integration) as a reference.
- Here are the following steps (in order) to setup Heroku with GitHub:
  - Set up the Heroku app.
  - Enable the GitHub integration in the Heroku app.
  - Enable "Automatic Deploys" to connect the main branch to the Heroku app.
  - Enable the "Wait for CI to pass before deploy" checkbox to make sure all tests are passed before deploying to Heroku app.
  - Review the temporary Heroku test app.
