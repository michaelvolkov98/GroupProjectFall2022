Feature: Homepage

    @sc1
    Scenario:
        Given I am on the demoblaze homepage
        When I click on ANY item
        And I click "Add to cart"
        #And I click away
        And "Add to cart" again
        And I go to cart
        Then I verify both items have their names
        And they cost the same

    @sc2
    Scenario:
        Given I am on the demoblaze homepage
        When I click on ANY item
        And I click "Add to cart"
        #And I click away
        And I go to cart
        And I click checkout
        And I add a name
        And I add a credit-card number
        Then I verify that the thank you screen has the same name and card number after I click purchase

    @sc3
    Scenario:
        Given I am on the demoblaze homepage
        When I click on ANY item
        And I click "Add to cart"
        #And I click away
        And I go to cart
        And I click checkout
        And I add a name
        And I add a credit-card number
        Then I verify there is green checkmark and the date is wrong
