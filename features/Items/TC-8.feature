Feature: Description match
    
    Scenario: Verify that product descriptions match the descriptions on the product page after clicking on them
        Given I am on the demoblaze homepage 
        When I click on "Samsung galaxy s6"
        Then I verify product description matches description on product page after clicking on them

        # npx wdio ./config/wdio.conf.js --spec ./features/Items/TC-8.feature