import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { FilteringJeansPage } from "../core/page-objects/filtering-jeans-page";
import { LoginPage } from "../core/page-objects/login-page";
import { CartPage } from "../core/page-objects/cart-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let filteringJeansPage: FilteringJeansPage;
let loginPage: LoginPage;
let cartPage: CartPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    filteringJeansPage = new FilteringJeansPage(driver);
    loginPage = new LoginPage(driver);
    cartPage = new CartPage(driver);
},10000);

test("User can place an order - SMOKE", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickLogInButton();
    await loginPage.clickEmailField();
    await loginPage.enterEmail();
    await loginPage.clickPasswordField()
    await loginPage.enterPassword();
    await loginPage.clickLoginButton();
    await homePage.goBackToHome();
    await homePage.clickMenuButton();
    await homePage.clickNewCollection();
    await homePage.clickJeansButton();
    await filteringJeansPage.clickColour();
    await filteringJeansPage.clickBeigeColour();
    await filteringJeansPage.clickRise();
    await filteringJeansPage.clickHighWaist();
    await filteringJeansPage.clickPlusAdd();
    await filteringJeansPage.click36Size();
    await homePage.goBackToHome();
    await homePage.clickCartButton();
    await cartPage.clickContinueButton();
  
},100000);

afterAll(async () => {
    await quitDriver(driver);
},10000);