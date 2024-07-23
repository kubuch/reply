/// <reference path="../support/index.d.ts" />

describe('Recruitment task', () => {

  beforeEach(() => {
    cy.loginByApi(Cypress.env('login'), Cypress.env('password'));
    cy.visit('https://demo.1crmcloud.com/index.php');
  })

  it.only('Verify if user is able to create new contact with success', () => {
    cy.contains('Home Dashboard', { timeout: 30000 });
    cy.get('[id="grouptab-1"]').click();
    cy.contains('Create Contact').click();
    cy.get('[id="DetailFormfirst_name-input"]', { timeout: 20000 }).type('Peter');
    cy.get('[id="DetailFormlast_name-input"]').type('Griffin');
    cy.wait(5000);
    cy.get('[id="DetailFormcategories-input"]', { timeout: 20000 }).click({ force: true }).wait(5000);
    cy.contains('Customers').click();
    cy.get('[id="DetailForm_save-label"]').click();
    cy.get('h1').contains('Peter Griffin');
    cy.get('[id="DetailForm_delete2-label"]').click();
  })

  it('Verify returning results in report', () => {
    cy.visit('https://demo.1crmcloud.com/index.php?module=Reports&action=index');
    cy.contains('Reports', { timeout: 30000 });
    cy.get('[id="filter_text"]', { timeout: 20000 }).type('Project Profitability {downArrow}{enter}');
    cy.contains('Project Profitability', { timeout: 30000 }).click();
    cy.wait(2000);
    cy.contains('Run Report').click();
    cy.contains(' Selected: 0 of ', { timeout: 20000 });
  })
})

