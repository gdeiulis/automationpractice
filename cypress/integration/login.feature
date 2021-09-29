#language: en
Feature: Sign in 
  Scenario: Loading Website
    Given I visit home page
    When I click "Sign in" link
    Then I am redirect to "authentication" page

Scenario: Sign in with valid credentials
  When I login with valid credentials
  Then I am redirect to 'my-account' page



