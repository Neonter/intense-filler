import { Browser, Builder, By, ThenableWebDriver } from "selenium-webdriver";
import { Optional } from "../utils/types/optional.type";
require('chromedriver');

class BrowserManager {
    private readonly _driver: ThenableWebDriver;
    public constructor(browserName?: Optional<string>) {
        this._driver = new Builder().forBrowser(browserName ?? Browser.CHROME).build();
    }

    public async get(url: string): Promise<void> {
        await this._driver.get(url)
    }

    public async click(cssSelector: string): Promise<void> {
        await this._driver.findElement(By.css(cssSelector)).click()
        // TODO: add optional  css selector params which indicates that click action has finished
    }
}

const BrowserManagerInstance = new BrowserManager();
export default BrowserManagerInstance;