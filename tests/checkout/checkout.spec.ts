import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { checkoutData } from '../../test-data/checkoutData';

test.describe('Checkout flow', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    test('should complete checkout successfully', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.validUser;

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.proceedToCheckout();

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();
        
        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
    });
});