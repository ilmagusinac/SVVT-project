import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HelpPage extends BasePage {
    
    private newsletter_button = By.xpath('//ul[@class="submenuUtilities"]//a[contains(string(),"Newsletter")]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async navigateToHelp(){
        await this.driver.navigate().to(testData.url.help_page)
    }

    async navigateToTikTok(){
        await this.driver.navigate().to(testData.social_media_url.tiktok)
    }

    async navigateToInstagram(){
        await this.driver.navigate().to(testData.social_media_url.instagram)
    }

    async navigateToFacebook(){
        await this.driver.navigate().to(testData.social_media_url.facebook)
    }

    async navigateToTwitter(){
        await this.driver.navigate().to(testData.social_media_url.twitter)
    }

    async navigateToPinterest(){
        await this.driver.navigate().to(testData.social_media_url.pinterest)
    }

    async navigateToYoutube(){
        await this.driver.navigate().to(testData.social_media_url.youtube)
    }

    async clickNewsletterButton() {
        await this.findElementAndClick(this.newsletter_button);
    }

    async goBackToHome(){
        await this.driver.navigate().to(testData.url.home_page)
    }
    
    
}