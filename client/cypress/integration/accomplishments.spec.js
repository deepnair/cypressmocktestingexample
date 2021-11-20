describe("mock test http requests", () => {

    beforeEach(() => {
        cy.visit('/accomplishments')
    })
    //Fill in all parts of the form and in the second part put in giraffe which is inappropriate
    it("Fill in all parts of the form and in the second part put in giraffe which is inappropriate", () => {
        cy.intercept('POST', 'http://localhost:4000', (req) => {
            req.reply(
                (res) => {
                    res.send({
                        msg: "Your giraffe is not appropriate"
                    })
                }
            )
        })
        
        
        cy.get('[placeholder="Title"]').type('Testing http requests');
        cy.get('[placeholder="My accomplishment..."]').type('Completed one mock test, now trying the other out with by giraffe.');
        cy.getByTestId('accomplishment-checkbox').check();
        cy.contains('button', 'Submit Accomplishment').click();
        cy.contains("Your giraffe is not appropriate").should('be.visible');
    })
})