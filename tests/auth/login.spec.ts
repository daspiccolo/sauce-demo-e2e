import { test, expect } from '@playwright/test';

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to SauceDemo login page before each test
    await page.goto('https://www.saucedemo.com');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Fill in valid username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Fill in valid password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

    // Verify that the user is redirected to the inventory page
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('should show an error message with invalid credentials', async ({ page }) => {
    // Fill in invalid username
    await page.locator('[data-test="username"]').fill('invalid_user');

    // Fill in valid password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

    // Verify that an error message is displayed
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});