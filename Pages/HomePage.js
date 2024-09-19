import { expect } from "@playwright/test";
import * as locators from "../Constants/registerLocators";


exports.HomePage=class HomePage {
    constructor(page) {
        this.page = page;
        this.signupLoginBtn = page.locator(locators.signupLoginBtn)
        this.loginPageText = page.locator(locators.loginPageText)
        this.loginEmail = page.locator(locators.loginEmail)
        this.loginPassword = page.locator(locators.loginPassword)
        this.loginBtn = page.locator(locators.loginBtn)
        this.loggedInUserAfterLogin = page.locator(locators.loggedInUserAfterLogin)
        this.productsBtn = page.locator(locators.productsBtn)
        this.firstProductHover = page.locator(locators.firstProductHover)
        this.firstProductAddToCartBtn = page.locator(locators.firstProductAddToCartBtn)
        this.continueShoppingBtn = page.locator(locators.continueShoppingBtn)
        this.cartButton = page.locator(locators.cartButton)
        this.firstProductInCart = page.locator(locators.firstProductInCart)
        this.categoriesSidebar = page.locator(locators.categoriesSidebar)
        this.womenCategory = page.locator(locators.womenCategory)
        this.dressCategoryLink = page.locator(locators.dressCategoryLink)
        this.categoryPageText = page.locator(locators.categoryPageText)
    }

    async navigateToHomePage() {
        await this.page.goto('https://automationexercise.com');
        await expect(page).toHaveURL('https://automationexercise.com');
    }

    async Login(){
        await this.page.goto('https://automationexercise.com');
        await this.signupLoginBtn.click();
        await expect(await this.loginPageText).toBeVisible();
        await this.loginEmail.fill('mixed33550@marchub.com');
        await this.loginPassword.fill('FixtureTest');
        await this.loginBtn.click();
        await expect(await this.loggedInUserAfterLogin).toBeVisible();    
    }

    async clickProducts() {
        await this.productsBtn.click();
    }

    async addFirstProductToCart() {
        await this.firstProductHover.hover();
        await this.firstProductAddToCartBtn.click();
    }

    async continueShopping() {
        await this.continueShoppingBtn.click();
    }

    async viewCart() {
        await this.cartButton.click();
    }

    async verifyProductsInCart() {
        await expect(await this.firstProductInCart).toBeVisible();
    }

    async verifyCategoriesVisible() {
        await expect(await this.categoriesSidebar).toBeVisible();
    }

    async clickWomenCategory() {
        await this.womenCategory.click();
    }

    async clickDressCategory() {
        await this.dressCategoryLink.click();
    }

    async verifyCategoryPage() {
        await expect(await this.categoryPageText).toBeVisible();
    }

}