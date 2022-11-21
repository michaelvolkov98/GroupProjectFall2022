const Commands = require("../Utils/Commands");

class ItemsPage{

    commands = new Commands()

    samsungGalaxyS6 = "//a[text()='Samsung galaxy s6']"
    addToCart = "//a[text()='Add to cart']"
    home = "//a[text()='Home ']"
    nokiaLumia = "//a[text()='Nokia lumia 1520']"
    nexus6 = "//a[text()='Nexus 6']"
    cart = "//a[text()='Cart']"
    total = "#totalp"
    individualPrices = "//tbody[@id='tbodyid']/tr/td/following-sibling::td/following-sibling::td[contains(text(),'0')]"

    samsungGalaxyPriceHomepage = "//a[text()='Samsung galaxy s6']/parent::h4/following-sibling::h5"
    samsungGalaxyPriceDescpPage = "//div[@id='tbodyid']/h3"

    homepageDescp = "//p[contains(text(),'Samsung Galaxy S6 is powered by 1.5GHz')]"
    prodpageDescp = "//p[contains(text(),'Samsung Galaxy S6 is powered by 1.5GHz')]"



    //TC-8
    async productDescriptionsMatch(){
        await browser.back();
        let hpageDescp = await this.commands.getElementText(this.homepageDescp);
        await this.commands.clickWebElement(this.samsungGalaxyS6);
        let ppageDescp = await this.commands.getElementText(this.prodpageDescp);
        if(hpageDescp.localeCompare(ppageDescp)===0){
            return true;
        }

    }
    //TC-9
    async totalForSamsungGalaxyEqualToActualTotal(){
        let total = await this.commands.getElementText(this.total);
        let itemTotal = await this.commands.getElementText(this.individualPrices);
        if(total.localeCompare(itemTotal)===0){
            return true;
        }
    }
    async homepageAndDescriptionPriceMatch(){
        await browser.back();
        let hpagePrice = await this.commands.getElementText(this.samsungGalaxyPriceHomepage);
        await this.commands.clickWebElement(this.samsungGalaxyS6);
        let dpagePriceText = await this.commands.getElementText(this.samsungGalaxyPriceDescpPage);
        let dpagePriceArray = dpagePriceText.split(' ');
        if(hpagePrice.localeCompare(dpagePriceArray[0])===0){
            return true;
        }
    }

    //TC-7

    async clickSamsungGalaxyS6(){
        await this.commands.clickWebElement(this.samsungGalaxyS6);
    }
    async clickAddToCart(){
        await this.commands.clickWebElement(this.addToCart);
    }
    async clickHome(){
        await this.commands.clickWebElement(this.home);
    }
    async clickNokiaLumia(){
        await this.commands.clickWebElement(this.nokiaLumia);
    }
    async clickNexus(){
        await this.commands.clickWebElement(this.nexus6);
    }
    async clickCart(){
        await this.commands.clickWebElement(this.cart);
    }
    async totalIsDisplayed(){
        return await this.commands.isWebElementDisplayed(this.total);
    }
    async totalIsEqualtoActualTotal(){
        let arrayOfTotals = await this.commands.findWebElements(this.individualPrices);
        let totalPrice = [];
        let num = 0;
        for(let item of arrayOfTotals){
            const price = await this.commands.getElementText(item);
            totalPrice.push(price);
            for(let i=0 ; i<=4 ; i++){
                num = num + totalPrice[i];
                if(num.localeCompare(this.total)){
                    return true;
                }
            }
        } 
    }


}
module.exports = ItemsPage; 