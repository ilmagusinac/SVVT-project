import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { UserPage } from "../core/page-objects/user-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let userPage: UserPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    userPage = new UserPage(driver);
},20000);

test("Login functionality", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickLogInButton();
    await loginPage.clickEmailField();
    await loginPage.enterEmail();
    await loginPage.clickPasswordField()
    await loginPage.enterPassword();
    await loginPage.clickLoginButton();
    await userPage.clickProfileButton();
    await userPage.clickSignOutButton();
},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);