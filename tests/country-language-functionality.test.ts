import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { CountryLanguagePage} from "../core/page-objects/country-language-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let countryLanguagePage: CountryLanguagePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.first_page);
    homePage = new HomePage(driver);
    countryLanguagePage = new CountryLanguagePage(driver);
},10000);

test("Country, Language functionality", async () => {
    await countryLanguagePage.clickCountry();
    await countryLanguagePage.clickFirstCountry();
    await countryLanguagePage.clickLanguage();
    await countryLanguagePage.clickFirstLanguage();
    await countryLanguagePage.clickGoButton();
    await homePage.checkHomePageTitle(); //this is to be sure that the title is Zara Bosnia and Herzegovina | Sale where we will see if the title really is about the country and that the language is english
  
},10000);

afterAll(async () => {
    await quitDriver(driver);
},10000);