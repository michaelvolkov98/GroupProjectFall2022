@alertbox @smoke
Feature: Login Alert Box

    Scenario: Verify that the alert box text for logging in without credentials is “Please fill out Username and Password.”
        Given I am on the demoblaze homepage
        When I click the "Log In link"
        And I click the "Log In button"
        Then I verify that the alertbox has the text "Please fill out Username and Password."

# @test
#     Scenario: Verify that the alert box text for logging in without credentials is “Please fill out Username and Password.”
#         Given I am on the demoblaze homepage
#         When I click the "Log In link"
#         And I click the "Log In button"
#         Then test