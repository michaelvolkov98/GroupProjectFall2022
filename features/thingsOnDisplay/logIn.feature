@logIn @smoke 
Feature: Things on display - Sign Up

    @tc-4
    Scenario: Verify that the user can create an account with valid credentials
        Given I am on the demoblaze homepage
        When I click the "Sign Up link"
        And I enter "a unique new username" in the "username" input field
        And I enter "QApassword333" in the "password" input field
        And I click the "Sign Up button"
        Then I verify that the alertbox has the text "Sign up successful."
        When I click the "Log In link"         
        And I enter "username" in the "username" input
        And I enter "QApassword333" in the "password" input
        And I click the "Log In button"
        Then I verify "Welcome 'created username'" text displayed