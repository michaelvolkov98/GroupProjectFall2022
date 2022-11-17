class Homepage {

    commands = new Commands();
    // Locators for web-elements on the Homepage (variables)
    feelsLikeTempLocator = '//span[@class="feels-like-text"]';
    lowTempLocator = '//span[@class="low-temp-text"]';
    highTempLocator = '//span[@class="high-temp-text"]'
    locationInputLocator = '//form[@id="searchForm"]/input[@type="text"]'
    searchButtonLocator = '//a[@class="searchButton"]'
    weatherSummaryLocator = '//span[@class="summary swap"]'
    allTimelineLocators = '//div[@id="timeline"]//span[contains(@class, "hour")]/span'
    allOtherTimelineLocators = '//div[@id="timeline"]//span[contains(@class, "hour")]/span[@class!="Now"]'
    timePlusTwoLocator = '//div[@id="timeline"]//div[@class="hours"]//span[3]/span[1]'
    timePlusTwentyTwoLocator = '//div[@id="timeline"]//div[@class="hours"]//span[23]/span[1]'
    todaybuttonLocator = '/html[1]/body[1]/div[6]/a[1]/span[3]/span[1]'//a[@data-day="0"]//circle'
    threedaysbuttonLocator = '//a[@data-day="3"]'
    lowtempdailyLocator = '//a[@data-day="0"]//span[@class="minTemp"]'
    hightempDailyLocator = '//a[@data-day="0"]//span[@class="maxTemp"]'

    // Functions in order to interact with the web-elements on the Homepage
    /**
     *  Get text from feelslike element
     */
    async getFeelsLikeText() {
        return await this.commands.getElementText(this.feelsLikeTempLocator);
    };
    async getLowTempText() {
        return await this.commands.getElementText(this.lowTempLocator);
    };
    async getHighTempText() {
        return await this.commands.getElementText(this.highTempLocator);
    };
    async setLocation(location) {
        await this.commands.typeInWebElement(this.locationInputLocator, location);
    };
    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButtonLocator);
    };
    async getSummaryText() {
        return await this.commands.getElementText(this.weatherSummaryLocator);
    };
    async getNumberOfWindows() {
        return await this.commands.getWindowsCount();
    };
    async verifyTimelineNumber(){
        const timelineLocators = await this.commands.findWebElements(this.allTimelineLocators);
        const numberOfTLEntries = timelineLocators.length
        expect(numberOfTLEntries === 12, 'Timeline entries NOT 12 as expected').to.be.true;

    }

    async checkTimeline() {
        const timePlusTwo = await this.commands.getElementText(this.timePlusTwoLocator)
        const timePlusTwentyTwo = await this.commands.getElementText(this.timePlusTwentyTwoLocator)
        const timeTwo = await MyMomentFunctions.currentHourhaPlus(2)
        const timeTwentyTwo = await MyMomentFunctions.currentHourhaPlus(22)
        // console.log(timePlusTwo);
        // console.log(timeTwo);
        expect(timePlusTwo === timeTwo, 'hour 2 doesnt match').to.be.true;
        expect(timePlusTwentyTwo === timeTwentyTwo, 'hour 22 doesnt match').to.be.true;

    }

    // async verifyTimesMatch() {
    //     const timelineElements = await this.commands.findWebElements(this.allTimelineLocators);
    //     let timelineTextArray = []
    //     let arrayoftimes = MyMomentFunctions.arrayofhourshaPlus(11,2);
    //     for (let element of timelineElements) {
    //             if(this.commands.getThisElementText(element) != 'Now') {
    //                 const elementext = await this.commands.getThisElementText(element)
    //                 timelineTextArray = timelineTextArray.push(elementext)
    //         }
            
    //     }
    //     expect(timelineTextArray, 'Arrays are not identical').to.eql(arrayoftimes)

    // }
    // async checkTimelineText() {
    //     const currentHour = await MyMomentFunctions.currentHourh();
    //     const currenHourNum = parseInt(currentHour)
    //     for (let index = 2; index <= 22; index+2) {
    //         const timelineElements = await this.commands.findWebElements(this.allTimelineLocators);
    //         for (let element of timelineElements) {
    //             if(this.commands.getElementText(element) != 'Now') {
    //                 console.log();
    //                 // const hour = MyMomentFunctions.currentHourhPlus(index);
    //                 // const elementtext = this.commands.getElementText(element)
    //                 // const elementContains = elementtext.includes(hour)
    //                 // expect(elementContains, 'Does not go up by 2').to.be.true;

    //             }
    //         }
            
    //     }

    // }

    async clickExpandTodayButton() {
        await this.commands.scrollAndClickWebElement(this.todaybuttonLocator);
        await browser.pause(5000)
    }

    async getDailyLowTempText() {
        return await this.commands.getElementText(this.lowtempdailyLocator);
    };

    async getDailyHighTempText() {
        return await this.commands.getElementText(this.hightempDailyLocator);
    };

    async verifyTempsMatchDaily() {
        const hplow = await this.getLowTempText();
        const hphigh = await this.getHighTempText();
        const dailyLow = await this.getDailyLowTempText();
        const dailyHigh = await this.getDailyHighTempText();
        expect(hplow == dailyLow, 'low temps dont match').to.be.true;
        expect(hphigh===dailyHigh, 'high temps dont match').to.be.true;
    }
}
module.exports = Homepage;