import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { SearchPage } from "../core/page-objects/search-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { FilteringJeansPage } from "../core/page-objects/filtering-jeans-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let searchPage: SearchPage;
let registrationPage: RegistrationPage;
let filteringJeansPage: FilteringJeansPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    searchPage = new SearchPage(driver);
    registrationPage = new RegistrationPage(driver);
    filteringJeansPage = new FilteringJeansPage(driver);
},30000);

test("Filtering functionality", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickMenuButton();
    await homePage.clickNewCollection();
    await homePage.clickJeansButton();
    await filteringJeansPage.clickColour();
    await filteringJeansPage.clickBeigeColour();
    await filteringJeansPage.clickRise();
    await filteringJeansPage.clickHighWaist();
    await homePage.navigateToHomePage();
},40000);

afterAll(async () => {
    await quitDriver(driver);
},30000);