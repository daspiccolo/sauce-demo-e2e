import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly addBackpackButton: Locator;
    readonly cartLink: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productImage: Locator;
    readonly sortDropdown: Locator;
    readonly productPrices: Locator;
    readonly inventoryItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.productName = page.locator('[data-test="inventory-item-name"]').first();
        this.productPrice = page.locator('[data-test="inventory-item-price"]').first();
        this.productImage = page.locator('.inventory_item_img img').first();
       
       
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productPrices = page.locator('[data-test="inventory-item-price"]');
        this.inventoryItems = page.locator('.inventory_item');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getProductName() {
        return await this.productName.innerText();
    }
}