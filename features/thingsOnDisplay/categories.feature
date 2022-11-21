@categories @smoke 
Feature: Product categories

    @tc-5
    Scenario: Verify that after clicking once on it, "next" button is no more displayed
    Given I am on the demoblaze homepage 
    When I click on Laptops in categories
    And I scroll and click Next Button
    Then I verify Next Button is not displayed on current page

    @tc-6
    Scenario Outline: Verify that every category has between 1 and 9 items displayed
    Given I am on the demoblaze homepage 
    When I click on <categoryName> in categories
    Then I verify there is between 1-9 options displayed

    Examples:
      | categoryName    | 
      | Phones          | 
      | Laptops         | 
      | Monitors        | 