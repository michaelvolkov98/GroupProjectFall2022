Feature: Cart total match

    Scenario: Verify that adding 4 things to the cart will show the total in the cart and that the total is equal to that actual total of all the items
        Given I am on the demoblaze homepage
        When I click on "Samsung galaxy s6"
        And I click on Add to cart
        #And I click okay on the alertbox
        And I click on Home
        And I click on "Nokia Lumia 1520"
        And I click on Add to cart
        #And I click okay on the alertbox
        And I click on Home
        And I click on "Nexus 6"
        And I click on Add to cart
        #And I click okay on the alertbox
        And I click on Home
        And I click on "Samsung galaxy s6"
        And I click on Add to cart
        #And I click okay on the alertbox
        And I click on Home
        And I click on Cart
        Then I verify total is displayed
        And I verify total is equal to the actual total of Items

        # npx wdio ./config/wdio.conf.js --spec ./features/Items/TC-7.feature