## Cypress mock http requests example
This is based on a turorial by Laith Harb at [Cypress (Web Testing Framework) Crash Course - 2021](https://www.youtube.com/watch?v=avb-VDa3ZG4). 

### Approach

1. Install the necessary requirements using npm i cypress, npm install to install the remaining dependencies.
1. Run the client using npm start, then run cypress on the client using npx cypress open.
1. Run the backend in a separate terminal using node index.js.
1. Use cy.intercept to write the intercepts of the requests. Use fixture for one, and (req) => req.reply() for the other.