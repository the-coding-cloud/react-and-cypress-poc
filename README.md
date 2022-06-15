
# React Redux & Cypress PoC

Small-sized React application with Redux + e2e testing using Cypress


## Run Locally

Clone the project

```bash
  git clone https://github.com/the-coding-cloud/react-and-cypress-poc.git
```

Go to the project directory

```bash
  cd react-and-cypress-poc
```

Install dependencies for React app

```bash
  npm install
```

Install dependencies for e2e module
```bash
  cd e2e
  npm install
```

Start the server

```bash
  npm run start
```

Open Cypress dashboard
```bash
  cd e2e
  npm run cy:open
```



## Technologies

To Do App:
- React 18.2.0
- Material UI 5.8.4
- React Redux 7.2.1

E2E Tests:
- Cypress 9.5.4

## General Info

This project consists of two main parts:
- The React application using Redux for state management
- The e2e module using the Cypress testing framework


### React App:

The To Do app shows a simple example of how reducers and actions are used for state management in Redux. The main actions performed are adding and removing an item from the To Do list.

Snippet from the To Do list actions: 
```
export const handleToDoItem = (payload) => ({
  type: HANDLE_TO_DO,
  payload
});

export const handleAddToDo = (payload) => ({
  type: ADD_TO_DO,
  payload
});

export const handleRemoveToDo = (payload) => ({
  type: REMOVE_TO_DO,
  payload
});
```

There are also 2 reducers: one concerning the To Do list and one concerning the state of the input field

### Cypress e2e tests

Cypress is a JavaScript testing automation solution used for web automation. It is far easier and faster to write tests using this framework, compared to Selenium, and it comes with a variety of features, including an experimental tool called Cypress Studio, which can be used for generating test code even by the non-technical people from a team.

The module e2e from this repo contains 4 folders. The most important ones are:
- fixtures: contains files that can be used from providing test data
- integration: contains the tests themselves
- support: contains utils; in this case the file commands.ts contains custom Cypress commands that can be reused throughout the whole project

#### basic.spec.ts

This set of tests contains a basic example of cypress commands: element selection, performing basic actions such as click & type and basic assertion

#### commands.spec.ts

This example shows how the custom commands + the data-cy selector come in handy for writing smaller, more readable tests with Cypress.

#### fixture-demo.spec.ts

In this test, we can see how the fixtures are imported inside the tests and we can also observe the async character of Cypress commands; we need to use ```.then``` in order to access the resource from the json file.

#### studio.spec.ts

This file contains a test with generated code from the Cypress studio. Compared to the manually written code, this one is longer, but saves time if a non-dev person has to overtake testing tasks.

The tests from a suite are executed sequentially and their execution can be viewed step by step in the Cypress dashboard

![image](https://user-images.githubusercontent.com/26270030/173848963-5065208e-969c-4bfc-bc78-23a6e0a166ec.png)

![image](https://user-images.githubusercontent.com/26270030/173849066-d0d7bc6a-439a-4a6b-bda9-99dfbbca9d22.png)

## References

 - [Redux docs](https://redux.js.org/api/api-reference)
 - [Cypress docs](https://docs.cypress.io)
