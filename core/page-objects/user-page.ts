import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class UserPage extends BasePage {

    // //body/div[@id='app-root']/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]
    private profile_button = By.xpath('//*[@id="main"]/article[@class="layout-content__article layout-user__content-article"]/div[@class="layout-user__container"]/div[1]/nav[@class="zds-nav-row layout-user-navigation layout-user__navigation"]/ul[@class="zds-nav-row__list zds-nav-row__list--tag"]/li[2]/a')
    //private profile_button = By.xpath("//span[contains(string(),'Profile')]");
    //sign_out_button: works -> /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/article[1]/div[1]/div[3]/div[2]/a[1]/span[1]
    //signout_button: m<b works -> //article[@class="layout-content__article layout-user__content-article"]/div/div[3]/div[2]/a[1]/span
    //a[@href="https://www.zara.com/ba/en/session/logout"]
    private sign_out_buutton = By.xpath('//*[@id="main"]/article[@class="layout-content__article layout-user__content-article"]/div[@class="grid-block grid-block--colums-6 grid-block--margin-left-0 grid-block--display-block layout-user__container"]/div[3]/div[2]/a[@data-qa-action="user-menu-logout"]')
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickProfileButton() {
        await this.findElementAndClick(this.profile_button);
    }
    async clickSignOutButton() {
        await this.findElementAndClick(this.sign_out_buutton);
    }

  

}