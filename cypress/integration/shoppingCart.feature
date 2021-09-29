#language: en
Feature: Shopping cart
  Scenario: Loading Website
    Given I visit home page
  
  Scenario: Search 
    Given I can see search input text
    When I search for 'black dresses'
    Then I see search results

  Scenario: Add Items  
    When I add the first item
    And I add the second item
    And I click Proceed to checkout
    Then I see 2 items in the shopping cart

  Scenario: Add Quantity Shopping Cart  
    When I click to plus icon to add quantity the second item
    And I remove first item
    Then I see 1 items in the shopping cart

Scenario: Checkout
  When I click Proceed to checkout
  Then I am redirect to 'authentication' page

  
 