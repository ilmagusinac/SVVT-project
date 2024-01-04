import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SearchPage extends BasePage {

    private search_button = By.className('search-products-form__input-container') 

    
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickSearchButton() {
        await this.findElementAndClick(this.search_button);
    }

    async enterItemName(){
        await this.fillInputField(this.search_button, testData.item.pants);
    }

    async goBackToHome(){
        await this.driver.navigate().to(testData.url.home_page)
    }
  
}