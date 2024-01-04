import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FilteringJeansPage extends BasePage {
    
    private colour = By.xpath('//section[@class="filters-bar"]/button[contains(string(), "COLOUR")]');
    private beige_colour = By.xpath('/html/body/div[1]/div[1]/div[1]/div/div/header/div[4]/div[1]/div/div/div[1]/fieldset/div[1]');
    
    private rise = By.xpath('//section[@class="filters-bar"]//button[contains(string(), "RISE")]');
    
    private high_waits=By.xpath('//*[@id="theme-app"]/div/div/header/div[4]/div[1]/div/div/div[1]/fieldset/div[1]/label');
    
    private size_L = By.xpath('//header/div[5]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[5]/label[1]');
    private add_to_cart=By.xpath('//li[@data-productid="324594552"]//button[@class="product-add-to-cart__button"]');
    
    private selectsize36 = By.xpath('//li[@id="product-size-selector-324594552-item-2"]');
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    

    async clickColour() {
        await this.findElementAndClick(this.colour);
    }

    async clickBeigeColour() {
        await this.findElementAndClick(this.beige_colour);
    }

    async clickRise() {
        await this.findElementAndClick(this.rise);
    }

    async clickHighWaist() {
        await this.findElementAndClick(this.high_waits);
    }

    async clickPlusAdd() {
        await this.findElementAndClick(this.add_to_cart);
    }

    async click36Size() {
        await this.findElementAndClick(this.selectsize36);
    }


    async clickSizeLFilter() {
        await this.findElementAndClick(this.size_L);
    }

    async clickAddToCartButton() {
        await this.findElementAndClick(this.add_to_cart);
    }

    async clickSize36() {
        await this.findElementAndClick(this.selectsize36);
    }

    
    
}