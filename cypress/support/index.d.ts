declare namespace Cypress {
  interface Chainable<Subject = any> {
    generateRandomString(length: number): Chainable<void>

    loginByApi(login: string, password: string): Chainable<void>

  
  }
}