describe('observable timer test', () => {

  const pollPeriod = 30000;

  beforeEach(() => {
    cy.clock();
    cy.visit('/');
  });

  it('there should be no people initially ', () => {
    cy.visit('/');
    cy.get('li').should('not.exist');
  });

  it('at every 30 second poll, a person should exist (+1 for initial poll)', () => {
    cy.tick(pollPeriod);
    cy.get('li').its('length').should('eq', 2);
  });

  const repeat = Cypress._.random(2, 99);

  Cypress._.times(repeat, () => {
    it('go crazy with repeated 30 sec polls with timer', () => {
      cy.tick(pollPeriod * repeat);
      cy.get('li').its('length').should('eq', repeat + 1);
    });
  });
});
