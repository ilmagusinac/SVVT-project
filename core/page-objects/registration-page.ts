import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegistrationPage extends BasePage {
    private email = By.xpath('//div[@data-name="email"]');
    private enter_email = By.xpath('//form[@id="address-form"]/div[@class="form__fields"]/div[@data-name="email"]/div[@class="form-input form-input--has-help"]/div[@class="form-input__wrapper"]/div[@class="zds-input-base form-input-text__input zds-input-base--full-width"]/input'); // /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]

    //private password = By.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]');
    private password = By.xpath('//div[@data-name="password"]');
    private enter_password = By.xpath('//div[@data-name="password"]//div[@class="zds-input-base zds-input-base--full-width zds-input-base--has-end-slot"]/input[@id="password91"]');

    private name = By.xpath('//div[@data-name="firstName"]');
    private enter_name = By.xpath('//div[@data-name="firstName"]//div[@class="form-input__wrapper"]//input[@id="firstName95"]');

    private surname = By.xpath('//div[@data-name="lastName"]');
    private enter_surname=By.xpath('//div[@data-name="lastName"]//div[@class="form-input__wrapper"]//input[@id="lastName99"]');

    private phone = By.xpath('//div[@data-name="autocompletePhone"]//div[@class="form-input form-input--has-help"]/div[@class="form-input__wrapper"]');
    private enter_phone = By.xpath('//div[@data-name="autocompletePhone"]//div[@class="form-input form-input--has-help"]/div[@class="form-input__wrapper"]//input[@id="phone.number107"]');

    private first_box = By.xpath('//div[@class="form-input__wrapper"]/label');
    private second_box = By.xpath('//div[@data-name="privacyCheck"]/div[@class="form-input"]');

    private create_acc_button  =By.xpath('//button[@class="zds-button zds-button--secondary"]');

    constructor(driver: WebDriver) {
        super(driver);
        this.driver = driver;
    }

    
    async clickEmailField(){
        await this.findElementAndClick(this.email);
    }

    async enterEmail(){
        await this.fillInputField(this.enter_email, testData.registration.email);
    }

    async clickPasswordField(){
        await this.findElementAndClick(this.password);
    }

    async enterPassword(){
        await this.fillInputField(this.enter_password, testData.registration.password);
    }

    async clickNameField(){
        await this.findElementAndClick(this.name);
    }

    async enterName(){
        await this.fillInputField(this.enter_name, testData.registration.name);
    }
    
    async clickSurnameField(){
        await this.findElementAndClick(this.surname);
    }

    async enterSurname(){
        await this.fillInputField(this.enter_surname, testData.registration.surname);
    }

    async clickTelephoneField(){
        await this.findElementAndClick(this.phone);
    }

    async enterTelephone(){
        await this.fillInputField(this.enter_phone, testData.registration.telephone);
    }

    async selectComercialCommunication(){
        //await this.scrollIntoView(this.first_box);
        await this.findElementAndClick(this.first_box);
    }

    async selectPrivacyandPolice(){
        await this.findElementAndClick(this.second_box);
    }

    async clickCreateAccButton(){
        await this.findElementAndClick(this.create_acc_button);
    }

}