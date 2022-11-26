@alertbox @signup
Feature: Signup Alert Box

@box
    Scenario: Verify “Thanks for the message!!” is displayed after clicking on “Contact Us” and entering anything as well as sending it
        Given I am on the demoblaze homepage
        When I click the "Sign Up link"
        And I enter "a unique new username" in the "username" field
        And I enter "QApassword333" in the "password" field
        And I click the "Sign Up button"
        Then I verify that the alertbox has the text "Sign up successful."
        When I click okay on the alertbox
        And I click the "Sign Up link"
        And I enter "a unique new username" in the "username" field
        And I enter "QApassword333" in the "password" field
        And I click the "Sign Up button"
        Then I verify that the alertbox has the text "This user already exist."