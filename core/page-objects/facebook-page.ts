import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FacebookPage extends BasePage {

    constructor(driver: WebDriver) {
        super(driver);
    }

    async checkFacebookUrl(){
        let currentUrl = await this.driver.getCurrentUrl();
        expect(currentUrl).toBe(testData.social_media_url.facebook);
    }

    
}