// const { Given } = require("@wdio/cucumber-framework");

const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const ItemsPage = require("../Pages/ItemsPage");

const ipage = new ItemsPage();

//TC-7

When(/^I click on "(.+)"$/, async function(fieldname){
    switch(fieldname) {
        case 'Samsung galaxy s6':
            await ipage.clickSamsungGalaxyS6();
            break;
        case 'Nokia Lumia 1520':
            await ipage.clickNokiaLumia();
            break;
        case 'Nexus 6':
            await ipage.clickNexus();

    }
    
})
When(/^I click on Add to cart$/, async function(){
    await ipage.clickAddToCart();
})
When(/^I click on Home$/, async function(){
    await ipage.clickHome();
})
When(/^I click on Cart$/, async function(){
    await ipage.clickCart();
})
Then(/^I verify total is displayed$/, async function(){
    expect(await ipage.totalIsDisplayed(),'Total is not displayed').to.be.true;
})
Then(/^I verify total is equal to the actual total of Items$/,async function(){
    expect(await ipage.totalIsEqualtoActualTotal(), 'Total displayed and actual total is not equal').to.be.true;
})

//TC-9

Then(/^I verify price displayed is same as price displayed in homepage$/, async function(){
    expect(await ipage.homepageAndDescriptionPriceMatch(), 'Prices do not match').to.be.true;
})
Then(/^I verify price displayed is same as price displayed in product description$/, async function(){
    expect(await ipage.totalForSamsungGalaxyEqualToActualTotal(),'Price does not match').to.be.true;
})

//TC-8

Then(/^I verify product description matches description on product page after clicking on them$/,async function(){
    expect(await ipage.productDescriptionsMatch(), 'Product descriptions do not match').to.be.true;
})
