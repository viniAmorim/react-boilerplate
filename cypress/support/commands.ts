/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    completeFirstStep(): Chainable;
    secondPageInitialState(): Chainable;
  }
}
