Feature: Price match

   Scenario: Verify that clicking on the item displays the same price as it does after you click it and verify the cart as well

        Given I am on the demoblaze homepage 
        When I click on "Samsung galaxy s6"
        Then I verify price displayed is same as price displayed in homepage
        When I click on Add to cart
        #And I click okay on the alertbox
        And I click on Cart
        Then I verify price displayed is same as price displayed in product description

        # npx wdio ./config/wdio.conf.js --spec ./features/Items/TC-8.feature
