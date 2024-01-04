////button[@class="store-selector-select__button"]
import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CountryLanguagePage extends BasePage {
    
    private buttonCountry = By.xpath('//div[@class="store-selector-select store-selector__store-select worldwide__store-select"]');
    private buttonFirstCountry = By.xpath('//button[@id="downshift-0-toggle-button"]');

    private buttonLanguage = By.xpath('//div[@class="store-selector-select store-selector__language-select worldwide__language-select"]');
    private buttonFirstLanguage = By.xpath('//button[@id="downshift-1-toggle-button"]');

    private goButton = By.xpath('//button[@class="zds-button store-selector__button worldwide__submit-button zds-button--secondary"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickCountry() {
        await this.findElementAndClick(this.buttonCountry);
    }

    async clickFirstCountry() {
        await this.findElementAndClick(this.buttonFirstCountry);
    }

    async clickLanguage() {
        await this.findElementAndClick(this.buttonLanguage);
    }

    async clickFirstLanguage() {
        await this.findElementAndClick(this.buttonFirstLanguage);
    }

    async clickGoButton() {
        await this.findElementAndClick(this.goButton);
    }



   
    
    
}