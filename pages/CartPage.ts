import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly backpackItem: Locator;
    readonly checkoutButton: Locator;
    readonly removeBackpackButton: Locator; 
    
    
    constructor(page: Page) {
        this.page = page;
        this.backpackItem = page.locator('[data-test="inventory-item-name"]')
            .filter({ hasText: 'Sauce Labs Backpack' });
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');

    }
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
    async removeBackpackFromCart() {
        await this.removeBackpackButton.click();
    }
}