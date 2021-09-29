import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from "../pages/Login";
const login = new Login()


Given('I visit home page', () => {
    login.visit()
 });

When('I click {string} link', () => {
    login.open()
});

Then('I am redirect to {string} page', (qs:string) => {
    login.pageRedirect(qs)
});

When('I login with valid credentials', () => {
    login.fillCredentialsForm()
});

