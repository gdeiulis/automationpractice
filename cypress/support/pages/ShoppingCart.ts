import Base from "./Base"

export default class ShoppingCart extends Base{

    findSearchField() {
        cy.get('#search_query_top').should('be.visible')
        return this;
    }
    
    search(searchField:string) {
        cy.get('#search_query_top').clear().type(searchField)
        cy.get('.button-search').click()

    }

    searchResults() {
        cy.get('.product_list').should('be.visible')
        cy.get('.product_list').find('li').its('length').should('gt', 0) 
    }

    addItem() {  
        cy.get(".ajax_add_to_cart_button").eq(0).click() 
        cy.get(".ajax_add_to_cart_button").eq(0).click()  
    }

    continueShopping() {  
        cy.wait(10000)
        cy.get("span[title='Continue shopping']").should('be.visible').click()
    }

    addSecondItem() {  
        cy.get('.product_list').find('li').eq(1).trigger('mouseover')
        cy.get(".ajax_add_to_cart_button").eq(1).click() 
    }

    checkout() {  
        cy.wait(10000)
        cy.get("a[title='Proceed to checkout']").click()    
    }

    viewCartShopping(items:number) {  
       cy.get(".cart_item").should('be.visible').its('length').should('eq', items)  
    }

    addQuantityItem() {  
        cy.wait(10000)
        cy.get(".icon-plus").eq(1).click()
 
    }

    deleteItem() {  
          cy.wait(10000)
        cy.get(".icon-trash").eq(0).click()

    }
}