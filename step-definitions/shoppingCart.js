const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Homepage");
const Items = require("../Pages/ItemsPage");

const hpage = new Homepage();
const items = new Items();


//TC - 1
When(/^I click on ANY item$/, async function() {
    await items.clickSamsungGalaxyS6();
});
When(/^I click "Add to cart"$/, async function() {
    await items.clickAddToCart();
});
When(/^I click away$/, async function() {
    await hpage.gclickAlertOK();
});
When(/^"Add to cart" again$/, async function() {
    await items.clickAddToCart();items.clickCart
});
When(/^I go to cart$/, async function() {
    await items.clickCart();
});
Then(/^I verify both items have their names$/, async function() {
    expect(await hpage.phoneArray).to.be.true
});
Then(/^they cost the same$/, async function() {
    expect(await hpage.pricesArray).to.be.true
});
// TC - 2
When(/^I click checkout$/, async function() {
    await hpage.clickPlaceOrderButton();
});
When(/^I add a name$/, async function() {
    await hpage.addName();
});
When(/^I add a credit-card number$/, async function() {
    await hpage.addCard();
});
Then(/^I verify that the thank you screen has the same name and card number after I click purchase$/, async function() {
    expect(await hpage.purchaseText).to.contain("name" && "9")
});
// TC - 3
Then(/^I verify there is green checkmark and the date is wrong$/, async function() {
    expect(hpage.checkmarkCheck).to.be.true
    expect(hpage.datesWrong).to.be.false
});
