import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CartPage extends BasePage {
    
    private search_button = By.className('search-products-form__input-container') ////div[@class="search-products-form__input-container"]

    private continue_button = By.xpath('//button[@class="zds-button layout-shop-footer__body-button zds-button--primary zds-button--small"]');
    
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickSearchButton() {
        await this.findElementAndClick(this.search_button);
    }

    async clickContinueButton() {
        await this.findElementAndClick(this.continue_button);
    }

    async goBackToHome(){
        await this.driver.navigate().to(testData.url.home_page)
    }

   
    
}