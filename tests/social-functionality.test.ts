import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HelpPage } from "../core/page-objects/help-page";
import { TikTokPage } from "../core/page-objects/tiktok-page";
import { InstagramPage } from "../core/page-objects/instagram-page";
import { FacebookPage } from "../core/page-objects/facebook-page";
import { TwitterPage } from "../core/page-objects/twitter-page";
import { PinterestPage } from "../core/page-objects/pinterest-page";
import { YoutubePage } from "../core/page-objects/youtube-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let helpPage: HelpPage;
let tikTokPage: TikTokPage;
let instagramPage: InstagramPage;
let facebookPage: FacebookPage;
let twitterPage: TwitterPage;
let pinterestPage: PinterestPage;
let youtubePage: YoutubePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    helpPage = new HelpPage(driver);
    tikTokPage = new TikTokPage(driver);
    instagramPage = new InstagramPage(driver);
    facebookPage = new FacebookPage(driver);
    twitterPage = new TwitterPage(driver);
    pinterestPage = new PinterestPage(driver);
    youtubePage = new YoutubePage(driver);
},30000);

test("Social Media Functionality", async () => {
    await homePage.HomePageNavigation();
    await homePage.clickHelpButton();

    await helpPage.navigateToTikTok();
    await tikTokPage.checkTikTokUrl();
    await helpPage.navigateToHelp();

    await helpPage.navigateToInstagram();
    await instagramPage.checkInstagramUrl();
    await helpPage.navigateToHelp();

    await helpPage.navigateToFacebook();
    await facebookPage.checkFacebookUrl();
    await helpPage.navigateToHelp();

    await helpPage.navigateToTwitter();
    await twitterPage.checkTwitterUrl();
    await helpPage.navigateToHelp();

    await helpPage.navigateToPinterest();
    await pinterestPage.checkPinterestUrl();
    await helpPage.navigateToHelp();

    await helpPage.navigateToYoutube();
    await youtubePage.checkYoutubeUrl();
    await helpPage.navigateToHelp();
  
},100000);

afterAll(async () => {
    await quitDriver(driver);
},30000);