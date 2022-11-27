const Commands = require("../Utils/Commands");
const MyFakerFunctions = require("../Utils/MyFakerFunctions");

class Homepage {

    commands = new Commands()
    // Locators for web-elements on the Homepage (variables)

    loginLinkLocator = "//a[@id='login2']";
    loginUsernameFieldLocator = "//input[@id='loginusername']"
    loginPasswordFieldLocator = "//input[@id='loginpassword']"
    loginButtonLocator = "//button[contains(text(),'Log in')]"
    signupLinkLocator = "//a[@id='signin2']"
    signupUsernameFieldLocator = "//input[@id='sign-username']"
    signupPasswordFieldLocator = "//input[@id='sign-password']"
    signupButtonLocator = "//button[contains(text(),'Sign up')]"
    contactLinkLocator = "//a[contains(text(),'Contact')]"
    contactEmailFieldLocator = "//input[@id='recipient-email']"
    contactNameFieldLocator = "//input[@id='recipient-name']"
    contactMessageFieldLocator = "//textarea[@id='message-text']"
    contactSendMessageButtonLocator = "//button[contains(text(),'Send message')]"

    //TC-4
    welcomeLinkTextLocator = "//a[contains(text(),'Welcome')]"

    //TC-5
    laptopsCategoryLocator = "//a[text()='Laptops']"
    nextButtonLocator = "//*[@id='next2']"

    //TC-6
    phonesCategoryLocator = "//a[text()='Phones']"
    monitorsCategoryLocator = "//a[text()='Monitors']"
    allProductsLocator = "//*[@class='card-block']"

    // Functions in order to interact with the web-elements on the Homepage

    uniqueNumber(min,max){
        return MyFakerFunctions.randomNumber(min,max);
    }
        
    async getAlertText() {
        return await this.commands.getAlertText();
    };
    
    async gclickAlertOK() {
        return await this.commands.acceptAlert();
    };
    
    async clickLoginLink() {
        await this.commands.clickWebElement(this.loginLinkLocator);
    };
    
    async clickLoginButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    };

    async clickSignupLink() {
        await this.commands.clickWebElement(this.signupLinkLocator);
    };

    async clickSignupButton() {
        await this.commands.clickWebElement(this.signupButtonLocator);
    };

    async clickContactusLink() {
        await this.commands.clickWebElement(this.contactLinkLocator);
    };

    async clickSendMessageButton() {
        await this.commands.clickWebElement(this.contactSendMessageButtonLocator);
    };
    
   /**
     * function to type in email address field
     * Input: locator, data
     *  
     */
    async enterLoginUsername(loginUsername) {
        await this.commands.typeInWebElement(this.loginUsernameFieldLocator, loginUsername);
    }

    async enterSigninUsername(signinUsername) {
        await this.commands.typeInWebElement(this.signupUsernameFieldLocator, signinUsername);
    }


    /**
     * function to type in password field
     * Input: locator, data
     *  
     */
    async enterLoginPassword(password) {
        await this.commands.typeInWebElement(this.loginPasswordFieldLocator, password);
    }

    async entersigninPassword(password) {
        await this.commands.typeInWebElement(this.signupPasswordFieldLocator, password);
    }

    /**
     * function to login
     * input: username, password
     */
    async login(username, password) {
        await this.enterLoginEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }

    async signup(username, password) {
        await this.enterSigninEmail(username);
        await this.entersigninPassword(password);
        await this.clickLoginButton();
    }

    //TC-4
    async getWelcomeUsernameText(){
        return await this.commands.getElementText(this.welcomeLinkTextLocator)

    }

    async getUsernameWelcomeMsg(){
        const welcomeMsg = await this.getWelcomeUsernameText(this.welcomeLinkTextLocator)
        const welcomeMsgArray = welcomeMsg.split(' ');
        const userName = welcomeMsgArray.pop()
        return userName;
    }

    //TC-5
    
    async clickLaptopsCategory(categoryName){
            await this.commands.scrollAndClickWebElement(`=${categoryName}`)
        }
    async clickNextButton(){
        await this.commands.clickWebElement(this.nextButtonLocator)
    }
   
    async isNextButtonDisplayed(){
        return await this.commands.isWebElementNotDisplayedWithWait(this.nextButtonLocator)
     }

    //TC-6
    async getAllDisplayedProducts(){
        return await this.commands.findWebElements(this.allProductsLocator)
    } 
    
    async isNrOfProductsBetween1and9(){
        let allProductsArray = await this.getAllDisplayedProducts(this.allProductsLocator);
        let allProductsNr = allProductsArray.length;
        
        if (allProductsNr >=1 && allProductsNr <=9){
            return true;            
        }
        else{
            return false;
        }
        

    }
    
    // /** OLD FUNCTIONS
    //  *  Get text from feelslike element
    //  */
    // async getFeelsLikeText() {
    //     return await this.commands.getElementText(this.feelsLikeTempLocator);
    // };
    // async getLowTempText() {
    //     return await this.commands.getElementText(this.lowTempLocator);
    // };
    // async getHighTempText() {
    //     return await this.commands.getElementText(this.highTempLocator);
    // };
    // async setLocation(location) {
    //     await this.commands.typeInWebElement(this.locationInputLocator, location);
    // };
    // async clickSearchButton() {
    //     await this.commands.clickWebElement(this.searchButtonLocator);
    // };
    // async getSummaryText() {
    //     return await this.commands.getElementText(this.weatherSummaryLocator);
    // };
    // async getNumberOfWindows() {
    //     return await this.commands.getWindowsCount();
    // };
    // async verifyTimelineNumber(){
    //     const timelineLocators = await this.commands.findWebElements(this.allTimelineLocators);
    //     const numberOfTLEntries = timelineLocators.length
    //     expect(numberOfTLEntries === 12, 'Timeline entries NOT 12 as expected').to.be.true;

    // }

    // async checkTimeline() {
    //     const timePlusTwo = await this.commands.getElementText(this.timePlusTwoLocator)
    //     const timePlusTwentyTwo = await this.commands.getElementText(this.timePlusTwentyTwoLocator)
    //     const timeTwo = await MyMomentFunctions.currentHourhaPlus(2)
    //     const timeTwentyTwo = await MyMomentFunctions.currentHourhaPlus(22)
    //     // console.log(timePlusTwo);
    //     // console.log(timeTwo);
    //     expect(timePlusTwo === timeTwo, 'hour 2 doesnt match').to.be.true;
    //     expect(timePlusTwentyTwo === timeTwentyTwo, 'hour 22 doesnt match').to.be.true;

    // }

    // // async verifyTimesMatch() {
    // //     const timelineElements = await this.commands.findWebElements(this.allTimelineLocators);
    // //     let timelineTextArray = []
    // //     let arrayoftimes = MyMomentFunctions.arrayofhourshaPlus(11,2);
    // //     for (let element of timelineElements) {
    // //             if(this.commands.getThisElementText(element) != 'Now') {
    // //                 const elementext = await this.commands.getThisElementText(element)
    // //                 timelineTextArray = timelineTextArray.push(elementext)
    // //         }
            
    // //     }
    // //     expect(timelineTextArray, 'Arrays are not identical').to.eql(arrayoftimes)

    // // }
    // // async checkTimelineText() {
    // //     const currentHour = await MyMomentFunctions.currentHourh();
    // //     const currenHourNum = parseInt(currentHour)
    // //     for (let index = 2; index <= 22; index+2) {
    // //         const timelineElements = await this.commands.findWebElements(this.allTimelineLocators);
    // //         for (let element of timelineElements) {
    // //             if(this.commands.getElementText(element) != 'Now') {
    // //                 console.log();
    // //                 // const hour = MyMomentFunctions.currentHourhPlus(index);
    // //                 // const elementtext = this.commands.getElementText(element)
    // //                 // const elementContains = elementtext.includes(hour)
    // //                 // expect(elementContains, 'Does not go up by 2').to.be.true;

    // //             }
    // //         }
            
    // //     }

    // // }

    // async clickExpandTodayButton() {
    //     await this.commands.scrollAndClickWebElement(this.todaybuttonLocator);
    //     await browser.pause(5000)
    // }

    // async getDailyLowTempText() {
    //     return await this.commands.getElementText(this.lowtempdailyLocator);
    // };

    // async getDailyHighTempText() {
    //     return await this.commands.getElementText(this.hightempDailyLocator);
    // };

    // async verifyTempsMatchDaily() {
    //     const hplow = await this.getLowTempText();
    //     const hphigh = await this.getHighTempText();
    //     const dailyLow = await this.getDailyLowTempText();
    //     const dailyHigh = await this.getDailyHighTempText();
    //     expect(hplow == dailyLow, 'low temps dont match').to.be.true;
    //     expect(hphigh===dailyHigh, 'high temps dont match').to.be.true;
    // }
}
module.exports = Homepage;