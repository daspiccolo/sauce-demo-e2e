import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Inventory and cart flow', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    test('should add product to cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
       
        // validate inventory page loaded
        await expect(inventoryPage.title).toBeVisible();
        await inventoryPage.addBackpackToCart();
    });

    test('should navigate to cart page', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.openCart();

        // validate navigation
        await expect(page).toHaveURL(/cart.html/);
    });

    test('should display added product in cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        const productName = await inventoryPage.getProductName();

        await inventoryPage.addBackpackToCart();
        await inventoryPage.openCart();

        await expect(cartPage.backpackItem).toBeVisible();
        await expect(cartPage.backpackItem).toHaveText(productName);
    });

});