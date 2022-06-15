// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
    namespace Cypress {
        interface Chainable {
            addToDo: typeof addToDo,
            removeNth: typeof removeNth
        }
    }
}

export function addToDo(description) {
    cy.get('#input').click().type(description);
    cy.get('[data-cy="add-button"]').click();
}

export function removeNth(index) {
    cy.get('[data-cy="delete-'+index+'"]').click();
}

Cypress.Commands.add("addToDo", addToDo);
Cypress.Commands.add("removeNth", removeNth);
