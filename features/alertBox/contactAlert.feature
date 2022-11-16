@alertbox @smoke
Feature: Contact Us Alert Box

    Scenario: Verify “Thanks for the message!!” is displayed after clicking on “Contact Us” and entering anything as well as sending it
        Given I am on the demoblaze homepage
        When I click the "Sign Up" link
        And I enter "QAusername{random3digits}" in the "Username" field
        And I enter "QApassword{random3digits}" in the "Password" field
        And I click  "Sign Up" button
        Then I verify that the alertbox has the text “Sign up successful.”
        When I click the "okay" button
        And I click the "Sign Up" link
        And I enter "QAusername{same3digits}" in the "Username" field
        And I enter "QApassword{same3digits}" in the "Password" field
        And I click  "Sign Up" button
        Then I verify that the alertbox has the text “This user already exist.”