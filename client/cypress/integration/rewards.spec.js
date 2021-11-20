///<reference types="cypress"/>

describe("requests testing", () => {
    beforeEach(() => {
        cy.visit('/rewards')
    })

    //Send a mock request to the backend that gets intercepted and check to see what the rewards is.
    it("Send a mock request to the backend that gets intercepted and check to see what the rewards is.", () => {
        cy.intercept('GET', 'http://localhost:4000/rewards', {
            fixture: 'rewards.json'
        });
        cy.get('.Rewards-cards-container').should('contain', '500 points for drinking 8 cups of water for 7 straight days')
        .and('contain', '250 points for exercising for 3 straight days');



    })
    //Send a mock request to the backend that gets intercepted and you receive an error response
})