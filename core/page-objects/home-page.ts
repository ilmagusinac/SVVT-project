import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {

    private navigate_logo = By.className("layout-catalog-logo-icon"); 
    private logo = By.className("layout-header-logo layout-header-logo--size-medium layout-header-std__logo layout-catalog__logo"); 
    
    private login_button = By.xpath('//a[@data-qa-id="header-logon-link"]');
    private search_button = By.className('layout-search-link__link link'); 
    private menu_button = By.className('layout-header-icon layout-header-std__icon');
    private cart_button = By.xpath('//a[@class="layout-header-link layout-header-link-shop-cart link"]');
    private help_button = By.xpath('//a[@data-qa-id="notify-help-center-click"]');
    
    private close_menu_button  =By.className('layout-header-grid layout-header-grid--size-small layout-menu-std__grid layout-menu-std__grid-small');
    
    //OUTSIDE MENU BUTTONS RELATED TO WOMAN, MAN, KIDS
    private main_woman_button = By.xpath('//button[@class="slider-spot-universes-bar__item slider-spot-universes-bar__item--selected"]');
    private main_man_button = By.xpath('/html/body/div[1]/div[1]/div[1]/div/div/div[2]/main/article/div[2]/ul[2]/li[2]/button'); //this was the only way we could find these buttons because the website was always changing
    private main_kids_button = By.xpath('/html/body/div[1]/div[1]/div[1]/div/div/div[2]/main/article/div[2]/ul[2]/li[3]/button');

    //NEW COLLECTION BUTTON
    private new_collection_button = By.xpath('//li[@class="layout-categories-category layout-categories-category--level-2 layout-categories-category--display-open"]');
    private jeans_button = By.xpath('//li[@data-categoryid="2353213"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async checkUrl(){
        let currentUrl = await this.driver.getCurrentUrl();
        expect(currentUrl).toBe(testData.url.home_page);
    }

    async HomePageNavigation() {
        await this.driver.findElement(this.logo).click();
    }

    async checkHomePageTitle(){
        await this.checkTitle(this, testData.title.home_page)
    }

    async goBackToHome(){
        await this.driver.navigate().to(testData.url.home_page)
    }

    async navigateToHomePage() {
        await this.driver.findElement(this.navigate_logo).click();
    }

    async clickLogInButton(){
        await this.findElementAndClick(this.login_button);
    }

    async clickHelpButton(){
        await this.findElementAndClick(this.help_button);
    }

    async clickSearchButton() {
        await this.findElementAndClick(this.search_button);
    }

    async clickMenuButton() {
        await this.findElementAndClick(this.menu_button);
    }

    async clickCloseMenuButton() {
        await this.waitAndClick(this.close_menu_button, 10000);
    }

    async clickJeansButton() {
        await this.findElementAndClick(this.jeans_button);
    }
    
    async clickCartButton() {
        await this.findElementAndClick(this.cart_button);
    }

    async clickWomanButton(){
        await this.waitAndClick(this.main_woman_button, 10000);
    }

    async clickManButton(){
        await this.waitAndClick(this.main_man_button, 10000);
    }

    async clickKidsButton(){
        await this.waitAndClick(this.main_kids_button, 10000);
    }

    async clickNewCollection(){
        await this.waitAndClick(this.new_collection_button, 10000);
    }



}