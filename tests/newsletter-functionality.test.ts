import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HelpPage } from "../core/page-objects/help-page";
import { NewsLetterPage } from "../core/page-objects/newsletter-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let helpPage: HelpPage;
let newsLetterPage: NewsLetterPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    helpPage = new HelpPage(driver);
    newsLetterPage = new NewsLetterPage(driver);
},10000);

test("Newsletter functionality", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickHelpButton();
    await helpPage.clickNewsletterButton();
    await newsLetterPage.clickPrivacyField();
    await newsLetterPage.clickWomanSectionField();
    await newsLetterPage.clickEmailField();
    await newsLetterPage.enterEmail();
    await newsLetterPage.clickSaveButton();
},10000);

afterAll(async () => {
    await quitDriver(driver);
},10000);