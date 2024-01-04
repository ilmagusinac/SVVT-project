import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class NewsLetterPage extends BasePage {
    // email: //input[@id="email325"]
    private email = By.xpath("//body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
    // //input[@id='email325']
    //private email_input = By.xpath("//input[@id='email325']");
    ///html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]
    private email_input = By.xpath("//form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
    private privacy_button  = By.xpath("//body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/label[1]/span[1]/*[2]");
    private woman_section = By.xpath("//body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[2]/form[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/label[1]/span[1]/*[2]");
    private save_button = By.xpath("//body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[2]/form[1]/div[2]/button[1]/div[1]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickPrivacyField() {
        await this.findElementAndClick(this.privacy_button);
    }

    async clickWomanSectionField() {
        await this.findElementAndClick(this.woman_section);
    }

    async clickEmailField() {
        await this.findElementAndClick(this.email);
    }

    async enterEmail(){
        await this.fillInputField(this.email_input, testData.login.email);
    }

    async clickSaveButton() {
        await this.findElementAndClick(this.save_button);
    }

    
    
}