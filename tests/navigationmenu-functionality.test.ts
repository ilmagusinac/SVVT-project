import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

import { SearchPage } from "../core/page-objects/search-page";
import { LoginPage } from "../core/page-objects/login-page";
import { HelpPage } from "../core/page-objects/help-page";
import { CartPage } from "../core/page-objects/cart-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let searchPage: SearchPage;
let loginPage: LoginPage;
let helpPage: HelpPage;
let cartPage: CartPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    searchPage = new SearchPage(driver);
    loginPage = new LoginPage(driver);
    helpPage = new HelpPage(driver);
    cartPage = new CartPage(driver);
},30000);

test("Navigation Menu functionality", async () => {
    await homePage.HomePageNavigation();
    
    await homePage.clickMenuButton();
    await homePage.clickCloseMenuButton();

    await homePage.clickWomanButton();
    await homePage.clickCloseMenuButton();

    await homePage.clickManButton();
    await homePage.clickCloseMenuButton();

    await homePage.clickKidsButton();
    await homePage.clickCloseMenuButton();

    await homePage.clickSearchButton();
    await searchPage.goBackToHome();

    await homePage.clickLogInButton();
    await loginPage.goBackToHome();

    await homePage.clickHelpButton();
    await helpPage.goBackToHome();

    await homePage.clickCartButton();
    await cartPage.goBackToHome();

  
},40000);

afterAll(async () => {
    await quitDriver(driver);
},30000);