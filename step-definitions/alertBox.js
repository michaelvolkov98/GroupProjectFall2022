const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Homepage");

const hpage = new Homepage();
const randomNumber = hpage.uniqueNumber(11111,99999);
const uniqueUsername = `QAUser${randomNumber}`

/**
Then(/^$/, async function() {

});
*/

Then(/^test$/, async function() {
    console.log(`\n TEST \n TEST \n TEST`);
    let alertText= await hpage.getAlertText();
    console.log(alertText);
    console.log(`\n TEST \n TEST \n TEST`);

});

Given(/^I am on the demoblaze homepage$/, async function() {
    await browser.url('/');
    await browser.setWindowSize(1920, 1080);
});

When(/^I click the "(.+)"$/, async function(fieldName) {
    switch(fieldName) {
        case "Log In link":
            await hpage.clickLoginLink();
            break;
        case "Log In button":
            await hpage.clickLoginButton();
            break;
        case "Sign Up link":
            await hpage.clickSignupLink();
            break;
        case "Sign Up button":
            await hpage.clickSignupButton();
            await browser.pause(600)
            break;
        case "Contact Us link":
            await hpage.clickContactusLink();
            break;
        case "Send Message button":
            await hpage.clickSendMessageButton();
            break;

    }
});

When(/^I enter "(.+)" in the "(.+)" field$/, async function(input, fieldName) {
    switch(fieldName) {
        case "username":
            await hpage.enterSigninUsername(uniqueUsername);
            break;
        case "password":
            await hpage.entersigninPassword(input);
            break;
        };
});

When(/^I click okay on the alertbox$/, async function() {
    await hpage.gclickAlertOK();
});

Then(/^I verify that the alertbox has the text "(.+)"$/, async function(text) {
    let alertboxText = await hpage.getAlertText();
    expect(alertboxText, "Alert Text Does Not Match Expected").to.equal(text);
});
