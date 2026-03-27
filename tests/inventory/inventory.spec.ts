import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { loginData } from '../../test-data/loginData';

test.describe('Inventory and cart flow', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(
            loginData.validCredentials.username,
            loginData.validCredentials.password
        );
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

    test('should display product information', async ({ page }) => {

        const inventoryPage = new InventoryPage(page);

        // Validate product name
        await expect(inventoryPage.productName).toBeVisible();
        await expect(inventoryPage.productName).not.toBeEmpty();

        // Validate product price
        await expect(inventoryPage.productPrice).toBeVisible();
        await expect(inventoryPage.productPrice).not.toBeEmpty();
        await expect(inventoryPage.productPrice).toContainText('$');

        // Validate product image
        await expect(inventoryPage.productImage).toBeVisible();
    });
    test('should sort products by price (low to high)', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        // Select sorting option
        await inventoryPage.sortDropdown.selectOption('lohi');

        // Get all prices
        const pricesText = await inventoryPage.productPrices.allTextContents();

        // Convert "$29.99" → 29.99
        const prices = pricesText.map(p => parseFloat(p.replace('$', '')));

        // Create sorted copy
        const sorted = [...prices].sort((a, b) => a - b);

        expect(prices).toEqual(sorted);
    });
});