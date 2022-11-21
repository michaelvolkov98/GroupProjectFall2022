
class Commands {


    /**
     * Generic function to find a webElement
     * Input: locator
     */
    async acceptAlert () {
        await this.waitForAlert();
        await browser.acceptAlert();
    };
    
    async getAlertText () {
        await this.waitForAlert();
        return await browser.getAlertText();
    };

    async waitForAlert () {
        await browser.waitUntil (async () => {
                return async function() {
                try {
                await browser.getAlertText();
          
                return true;
              } catch (error) {
                if (error.name === 'no such alert') {
                  return false;
                }
              }
            }
          })
    };

    
    async waitForAlert2 () {
        await browser.waitUntil (async () => {
            let currentAlertText = await this.getAlertText();
            return currentAlertText;
        })
    };

    isAlertPresent() {
        return async function() {
          try {
            await browser.getAlertText();
      
            return true;
          } catch (error) {
              return false;
        
          }
        }
    };

    async findWebElement(locator) {
        await $(locator).waitForDisplayed();
        return await $(locator);
    }

    async findWebElements(locator) {
        await browser.waitUntil(async () => {
            const elements = await $$(locator);
            return elements.length > 0;
        });
        return await $$(locator);
    }

    async findUndisplayedWebElement(locator) {
        return await $(locator);
    }
    async findUndisplayedWebElements(locator) {
        return await $$(locator);
    }

    async isWebElementNotDisplayedWithWait(locator){
        await $(locator).waitForDisplayed({ reverse: true, timeoutMsg: 'Next button is still displayed after 10 seconds'})
        return await $(locator).isDisplayed()
     }
    /**
     * Generic function to click a webElement
     * Input: locator
     */
    async findClickableWebElement(locator) {
        await $(locator).waitForClickable();
        return await $(locator);
    }
    async clickWebElement(locator) {
        const element = await this.findClickableWebElement(locator);
        await element.click();
    }
    async clickUndisplayedWebElement(locator) {
        const element = await this.findUndisplayedWebElement(locator);
        await element.click();
    }

    async scrollElementIntoView(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
    }

    async scrollAndClickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
        await element.click();
    }
    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

    /**
     * Generic function to find if WebElement is enabled
     * Input: locator
     */
    async isWebElementEnabled(locator) {
        const element = await this.findWebElement(locator);
        return await element.isEnabled();
    }

    /**
     * Generic function to select value form Dropdown (with select-tag)
     * Input: locator, selectThis
     */

    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    };

    /**
     * Generic function to select value form Dropdown (without select-tag)
     * Input: locator, selectThis
     */
    async selectFromDropdownByAttribute(locator, attribute, value) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByAttribute(attribute, value);
    };

    /**
     * Generic function to get Text
     * Input: locator, data
     */
    async getElementText(locator) {
        const element = await this.findWebElement(locator);
        return await element.getText();
    }
    async getUndisplayedElementText(locator) {
        const element = await this.findUndisplayedWebElement(locator);
        return await element.getText();
    }
    async getThisElementText(element) {
        return await element.getText();
    }

    async sortElementArrayByFunction(fn,locator) {
        let elementArray = await this.findUndisplayedWebElements(locator)
        let sortedElementArray = [...elementArray].sort(fn)
        return sortedElementArray
    }

    


    /**
     * Generic function to get Text
     * Input: locator, data
     */
    async isElementSelected(locator) {
        const element = await this.findWebElement(locator);
        return await element.isSelected();
    }
    async isElementDisplayed(locator) {
        const element = await this.findUndisplayedWebElement(locator);
        return await element.isDisplayed();
    }
    async getElementAttrValByLoc(locator, attribute) {
        const element = await this.findWebElement(locator);
        return await element.getAttribute(attribute);
    }
    async getElementAttrValByLocUndisplayed(locator, attribute) {
        const element = await this.findUndisplayedWebElement(locator);
        return await element.getAttribute(attribute);
    }
    async getElementAttrVal(element, attribute) {
        return await element.getAttribute(attribute);
    }

    async getAllWindowHandles() {
        await browser.waitUntil(async () => {
            const allHandles = await browser.getWindowHandles();
            return allHandles.length > 1;
        });
        return await browser.getWindowHandles();
    }

    async getCurrentWindowHandle() {
        return await browser.getWindowHandle();
    }

    async switchToWindowHandle(handle) {
        await browser.switchToWindow(handle);
    }

    async closeWebWindow() {
        await browser.closeWindow();
    }
 
    async closeWindowsByTitle(titleContains){   
        const allHandles = await this.getAllWindowHandles();
        for (let handle of allHandles) {
            await this.switchToWindowHandle(handle);
            await this.waitForTitle();
            const pageTitle = await this.getWindowTitle();
            if (pageTitle.includes(titleContains)) {
            await this.closeWebWindow();
            };
        };
    };

    async getWindowsCount() {
        const allHandles = await this.getAllWindowHandles();
        return allHandles.length;
    };

    async getWindowTitle() {
        return await browser.getTitle();
    };

    async getWindowHandleWaitFromTitle (title) {
        let currentWindowTitle = await this.getWindowTitle();
        if (currentWindowTitle === title) {
            return await this.getCurrentWindowHandle();
        };
        
    };

    async GetTitleWaitUntilTitleExists () {
        await browser.waitUntil (async () => {
            let currentWindowTitle = await this.getWindowTitle();
            return currentWindowTitle != '';
        })
        return await this.getWindowTitle();
    };

    async waitForTitle () {
        await browser.waitUntil (async () => {
            let currentWindowTitle = await this.getWindowTitle();
            return currentWindowTitle != '';
        })
    };

    

    async swapWindow() {
        const allHandles = await this.getAllWindowHandles();    // all open handles
        const handle1 = await this.getCurrentWindowHandle();   // handle before swap
        for (const handle of allHandles) {        // iterates through all handles
            if (handle != handle1) {
                await this.switchToWindowHandle(handle);
            };
        };
    };

    async swapAwayFromWindowHandle(handle) {
        let currentHandle = await this.getCurrentWindowHandle();
        if (handle = currentHandle) {
            await this.swapWindow();
        };
    };
    
    async swapWindowWFURL() {
        const allHandles = await this.getAllWindowHandles();
        const handle1 = await this.getCurrentWindowHandle();   // h1
        for (let handle of allHandles) {        // allHandles = [h1, h2]
            if (handle != handle1) {
                await browser.waitUntil(async () => {
                    
                });
                await this.switchToWindowHandle(handle);
            };
        };
    };


    async closeAllOtherWindows(titleContains){   
        const allHandles = await this.getAllWindowHandles();
        for (let handle of allHandles) {
            await this.switchToWindowHandle(handle);
            const pageTitle = await this.getWindowTitle();
            if (!pageTitle.includes(titleContains)) {
            await this.closeWebWindow();
            };
        };
    };

    async checkNewWindowTitleAndReturn(title) {
        const currentPage = await this.getCurrentWindowHandle();
        const allHandles = await this.getAllWindowHandles();
        for (let handle of allHandles) {
            let newHandle = await this.getCurrentWindowHandle();
            await this.switchToWindowHandle(newHandle);
            await this.waitForTitle();
            let pageTitle = await this.getWindowTitle();
            if (pageTitle.includes(title)) {
                break;
            }; 
        };
        const newPage = await this.getCurrentWindowHandle();
        if(newPage != currentPage) {
            await this.switchToWindowHandle(currentPage);
            console.log(`Does the code get here: Yes`);
            return true
        } else {
            return false
        };
    };


    randomNumber(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        return faker.random.number(min, max);
      }
    // async swapToWindowByPartialPageTitle(title) {
    //     const allHandles = await this.getAllWindowHandles();
    //     for (handle of allHandles) {
    //         await this.switchToWindowHandle(handle);
    //         const pageTitle = await this.getWindowTitle();
    //         if (pageTitle.includes(title)) {
    //             await browser.closeWindow();
    //         }
    //     }

    // }

    async switchWindowByTitle (title) {
        await this.waitForTitle();
        await browser.switchWindow(title);
    };
    
    // /**
    //  * Generic function to find a webElement
    //  * Input: locator
    //  */
    //  async findWebElement(locator) {
    //     return await $(locator);
    // }

    // /**
    //  * Generic function to find webElements
    //  * Input: locator
    //  */
    // async findWebElements(locator) {
    //     return await $$(locator);
    // }

    // /**
    //  * Generic function to click a webElement
    //  * Input: locator
    //  */
    // async clickWebElement(locator) {
    //     const element = await this.findWebElement(locator);
    //     await element.click();
    // }

    // /**
    //  * Generic function to type a webElement
    //  * Input: locator, data
    //  */
    // async typeInWebElement(locator, data) {
    //     const element = await this.findWebElement(locator);
    //     await element.setValue(data);
    // }

    // /**
    //  * Generic function to find if WebElement is enabled
    //  * Input: locator
    //  */
    // async isWebElementEnabled(locator) {
    //     const element = await this.findWebElement(locator);
    //     return await element.isEnabled();
    // }

    /**
     * Generic function to find if WebElement is displayed
     * Input: locator
     */
    async isWebElementDisplayed(locator) {
        const element = await this.findWebElement(locator);
        return await element.isDisplayed();
    };

    // /**
    //  * Generic function to select value form Dropdown (with select-tag)
    //  * Input: locator, selectThis
    //  */
    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    };

    // async getTextFromWebElement(locator) {
    //     const element = this.findWebElement(locator);
    //     return await element.getText();
    // }

    // /**
    //  * Generic function to select value from auto suggestion
    //  * Input: valueToSelect, locatorForAutoSuggestionElements
    //  */
    // async selectFromAutoSuggestions(locatorForAutoSuggestionElements, valueToSelect) {
    //     const autoSuggestionElements = await this.findWebElements(locatorForAutoSuggestionElements);

    //     for (const autoSuggestionElement of autoSuggestionElements) {
    //         const suggestionText = await autoSuggestionElement.getText();
    //         if (suggestionText.toLowerCase().localeCompare(valueToSelect.toLowerCase()) === 0) {
    //             await autoSuggestionElement.click();
    //             break;
    //         }
    //     }
    // }

    // async selectDateFromCalendar(monthHeadingLocator, goToNextMonthLocator, allDatesLocator, dateToSelect) {
    //     for (let i=1 ; i <= 12 ; i++) {
    //         const monthSeen = await this.isWebElementDisplayed(monthHeadingLocator);
    //         if (monthSeen) {
    //             break;
    //         }
    //         await this.clickWebElement(goToNextMonthLocator);
    //     }
    //     const allDateElements = await this.findWebElements(allDatesLocator);
    //     for (const dateElement of allDateElements) {
    //         const date = await dateElement.getAttribute('data-day');
    //         if (date.localeCompare(dateToSelect) === 0) {
    //             await dateElement.click();
    //             break;
    //         }
    //     }
    // }



}
module.exports = Commands