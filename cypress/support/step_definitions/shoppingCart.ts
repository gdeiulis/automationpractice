import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';;
import ShoppingCart from "../../support/pages/ShoppingCart";
const shoppingCart = new ShoppingCart()


Given('I visit home page', () => {
  shoppingCart.visit()
});

Given('I can see search input text', () => {
  shoppingCart.findSearchField()
});

When('I search for {string}', (searchString:string) => {
   shoppingCart.search(searchString)
});

Then('I see search results', () => {
  shoppingCart.searchResults()
});

When('I add the first item', () => {
  shoppingCart.addItem()
  shoppingCart.continueShopping()
});
 
And('I add the second item', () => {
  shoppingCart.addSecondItem()
});

And('I click Proceed to checkout', () => {
  shoppingCart.checkout()
});

Then('I see {int} items in the shopping cart', (itemsNum:number) => {
  shoppingCart.viewCartShopping(itemsNum)
});

When('I click to plus icon to add quantity the second item', () => {
  shoppingCart.addQuantityItem()
});

When('I remove first item', () => {
  shoppingCart.deleteItem()
});

Then('I see {int} items in the shopping cart', (itemsNum:number) => {
  shoppingCart.viewCartShopping(itemsNum)
});

Then('I am redirect to {string} page', (qs:string) => {
  shoppingCart.pageRedirect(qs)
});


