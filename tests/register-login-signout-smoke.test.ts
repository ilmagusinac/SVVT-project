import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { LoginPage } from "../core/page-objects/login-page";
import { UserPage } from "../core/page-objects/user-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let registrationPage: RegistrationPage;
let userPage: UserPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    registrationPage = new RegistrationPage(driver);
    userPage = new UserPage(driver);
},20000);

test("Smoke test: User can register, login and signuout", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickLogInButton();
    await loginPage.clickRegisterButton();
    await registrationPage.clickEmailField();
    await registrationPage.enterEmail();
    await registrationPage.clickPasswordField();
    await registrationPage.enterPassword();
    await registrationPage.clickNameField();
    await registrationPage.enterName();
    await registrationPage.clickSurnameField();
    await registrationPage.enterSurname();
    await registrationPage.clickTelephoneField();
    await registrationPage.enterTelephone();
    await registrationPage.selectComercialCommunication();
    await registrationPage.selectPrivacyandPolice();
    await registrationPage.clickCreateAccButton(); 
    //other steps will not be conducted because we need to enter a code that will be sent to owr mobile phones
    await homePage.goBackToHome();
    await homePage.clickLogInButton();
    await loginPage.clickEmailField();
    await loginPage.enterEmail();
    await loginPage.clickPasswordField()
    await loginPage.enterPassword();
    await loginPage.clickLoginButton();
    await userPage.clickProfileButton();
    await userPage.clickSignOutButton();

},100000);

afterAll(async () => {
    await quitDriver(driver);
},20000);