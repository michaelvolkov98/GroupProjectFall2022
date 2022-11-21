const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Homepage");

const hpage = new Homepage();
const randomNumber = hpage.uniqueNumber(11111,99999);
let uniqueUsername = `QAUser${randomNumber}`
let userName = '';
let password = '';

When(/^I enter "(.+)" in the "(.+)" input field$/, async function(input, fieldName) {
    switch(fieldName) {
    case "username":
        await hpage.enterSigninUsername(uniqueUsername);
         userName = uniqueUsername;
        break;
    case "password":
        await hpage.entersigninPassword(input);
        password = input;
        break;
    };     
});

When(/^I enter "(.+)" in the "(.+)" input$/, async function(password, fieldName) {
    switch(fieldName) {
        case "username":
            await hpage.enterLoginUsername(userName);
            break;
        case "password":
            await hpage.enterLoginPassword(password);
            break;
        };

});

Then(/^I verify ".+" text displayed$/, async function() {
   let expectedUsername = await hpage.getUsernameWelcomeMsg();
   expect(expectedUsername).to.equal(userName); 
});

//TC-5

When(/^I click on (.+) in categories$/, async function(categoryName) {
    await hpage.clickLaptopsCategory(categoryName)
});

When(/^I scroll and click Next Button$/, async function() {
    await hpage.clickNextButton()     
 });
Then(/^I verify Next Button is not displayed on current page$/, async function() {
    expect(await hpage.isNextButtonDisplayed(), "Next button is displayed").to.be.false;    
 });


//TC-6
Then(/^I verify there is between 1-9 options displayed$/, async function() {
    expect(await hpage.isNrOfProductsBetween1and9()).to.be.true;    
 });


