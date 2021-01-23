describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Input a text in the plan box and add it to todays list', () => {
        cy.get('#todo-app') //1
            .shadow() //2
            .find('#adds-item') 
            .shadow() // 3
            .find('#enter-text-area') 
            .type('Shadow DOM')
            .wait(2000)
        cy.get('#todo-app') //1
            .shadow() //2
            .find('#adds-item') //3
            .shadow()
            .find('.btn-enter') //4
            .click()
            .wait(2000)
        cy.end()
    })
})