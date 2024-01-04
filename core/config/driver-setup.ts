import { Builder, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";


let driver;


export async function createDriver(url : string) {
    const chromeOptions = new chrome.Options();
    driver = await new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
    await driver.get(url);
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 15000 });
    return driver;
}


export async function quitDriver(driver: WebDriver) {
    await driver.quit();
}












































/*import { By, WebDriver, WebElement, until } from "selenium-webdriver";
export default class BasePage {
    protected driver: WebDriver;


    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async getTitle(){
        return await this.driver.getTitle();
    }
    async checkMatchingElements(selector: By, matchingItem: string){
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }
    
    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string){
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }  
    
    async waitAndClick(elementLocator, timeout) {
        await this.driver.wait(
            until.elementLocated(elementLocator), timeout).click();
    }
   
    async waitForElement(elementLocator, timeout) {
        return this.driver.wait(until.elementLocated(elementLocator), timeout);
    }

    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
                    .move({ duration: 2000, origin: element, x: 0, y: 0 })
                    .perform();
    }

    async scrollToElement(element: WebElement): Promise<void> {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    async findElement(selector: By) {
        return await this.driver.findElement(selector);
    }

    async findElementAndClick(selector: By){
        await this.driver.wait(until.elementLocated(selector),10000).click();
    }

    async fillInputField(inputField: By, text: string) {
        await (await this.findElement(inputField)).sendKeys(text);
    }
}
*/
