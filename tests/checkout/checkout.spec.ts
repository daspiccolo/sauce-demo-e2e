import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { checkoutData } from '../../test-data/checkoutData';
import { navigateToCheckout } from '../../utils/flowHelpers';

test.describe('Checkout flow', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    test('should complete checkout successfully', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.validUser;

        await navigateToCheckout(page);

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();

        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
    });
    test('should fail checkout with missing first name', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.missingFirstName;

        await navigateToCheckout(page);

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage)
            .toHaveText('Error: First Name is required');
    });
    test('should fail checkout with missing last name', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.missingLastName;

        await navigateToCheckout(page);

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage)
            .toHaveText('Error: Last Name is required');
    });
    test('should fail checkout with missing postal code', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.missingPostalCode;

        await navigateToCheckout(page);

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.errorMessage)
            .toHaveText('Error: Postal Code is required');
    });

    test('should display correct checkout overview information', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        const user = checkoutData.validUser;

        await navigateToCheckout(page);

        await checkoutPage.fillCheckoutInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        );

        await checkoutPage.continueCheckout();

        await expect(checkoutPage.overviewTitle).toHaveText('Checkout: Overview');
        await expect(checkoutPage.overviewProductName).toHaveText('Sauce Labs Backpack');
        await expect(checkoutPage.totalLabel).toContainText('$');
    });
    test('should cancel checkout process', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);

        await navigateToCheckout(page);

        await checkoutPage.cancelCheckout();

        await expect(page).toHaveURL(/cart.html/);
    });
});