@alertbox @smoke
Feature: Sign Up Alert Box

    Scenario: Verify that you can not create a user with the same username as an already created account
        Given I am on the demoblaze homepage
        When I  click the "Contact Us" link
        And I click  "Send Message" button
        Then I verify that the alertbox has the text “Thanks for the message!!”