import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
    //form[1]/div[1]/div[1]/div[1]/div[1]/div[1]
    //email:works -> //body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]
    private email = By.xpath('//form/div/div/div/div/div[@class="zds-input-base form-input-text__input zds-input-base--full-width"]');
    //private email_input = By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
    private email_input = By.xpath("//input[@name='logonId']"); //id - 29
    //password: works -> //body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]
    private password = By.xpath('//form/div/div[2]/div/div/div[@class="zds-input-base zds-input-base--full-width zds-input-base--has-end-slot"]');
    ///html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]
    private password_input = By.xpath("//input[@name='password']"); //name 33
    // login_button: works -> //body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[2]/button[1]
    private login_button = By.xpath('//form/div[@class="form__footer"]/button[@class="zds-button zds-button--secondary zds-button--small"]');

    private register_button = By.xpath('//section[@class="logon-view__section-info"]//button[@class="zds-button zds-button--secondary zds-button--small"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickEmailField() {
        await this.findElementAndClick(this.email);
    }

    async enterEmail(){
        await this.fillInputField(this.email_input, testData.login.email);
    }

    async clickPasswordField(){
        await this.findElementAndClick(this.password);
    }

    async enterPassword(){
        await this.fillInputField(this.password_input, testData.login.password);
    }

    async clickLoginButton(){
        await this.findElementAndClick(this.login_button);
    }

    async clickRegisterButton() {
        await this.findElementAndClick(this.register_button);
    }

    async goBackToHome(){
        await this.driver.navigate().to(testData.url.home_page)
    }

}