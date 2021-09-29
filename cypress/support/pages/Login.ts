import Base from "./Base"

export default class Login extends Base{
    
    fillCredentialsForm() {
        cy.fixture('userCred').then((userCredentials)  => {
            let email = userCredentials.email
            let pwd = userCredentials.pwd
            cy.get('#email').clear().type(email)
            cy.get('#passwd').clear().type(pwd)
            cy.get('#SubmitLogin').click()
        })
    }

}