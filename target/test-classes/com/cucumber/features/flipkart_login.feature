Feature: Flipkart login

  Background: flow till step1
    Given user is on flipkart homepage

  @sanity
  Scenario Outline: login with wrong username and password
    Given Sign in button is present on the screen
    When user clicks on Sign in button
    Then user is displayed login screen
    When user enters "<Username>" in username field
    When user enters "<Password>" in password field
    And user clicks on Sign in button
    Then user gets login failed message

    Examples: 
      | Username   | Password   |
      | nousername | nopassword |
      | username1  | password1  |

  #When user clicks on Sign in button
  #Then user is displayed login screen
  #When user types "asics shoes" in search box
  #When user clicks search button
  #Then asics shoes are displayed
  
  @regression
  Scenario: Available content
    Given Electronics button is present on the screen
    When user clicks on Electronics button
    Then user is displayed mobile option

  @sanity 
  @regression
  Scenario: Available logo
    Given Flipkart logo is present on the screen
    When user clicks on Flipkart logo
    Then user is displayed home page
