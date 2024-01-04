import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

import { HomePage } from "../core/page-objects/home-page";
import { FilteringJeansPage } from "../core/page-objects/filtering-jeans-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let filteringJeansPage: FilteringJeansPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    filteringJeansPage = new FilteringJeansPage(driver);
},10000);

test("Add To cart functionality", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickMenuButton();
    await homePage.clickNewCollection();
    await homePage.clickJeansButton();
    await filteringJeansPage.clickColour();
    await filteringJeansPage.clickBeigeColour();
    await filteringJeansPage.clickRise();
    await filteringJeansPage.clickHighWaist();
    await filteringJeansPage.clickPlusAdd();
    await filteringJeansPage.click36Size();
    await homePage.clickCartButton();
    await homePage.navigateToHomePage();
  
},30000);

afterAll(async () => {
    await quitDriver(driver);
},10000);