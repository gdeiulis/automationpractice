export default class Base {
    
    visit() {
        cy.visit("/")
    }

    open() {
        cy.get(".login").click()
    }
    
    pageRedirect(qs:string) {
        cy.url().should('include', qs)
    }
}