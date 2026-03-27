import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { loginData } from '../../test-data/loginData';
import { InventoryPage } from '../../pages/InventoryPage';


test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(
      loginData.validCredentials.username,
      loginData.validCredentials.password
    );

    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('should show an error message with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.invalidUsername.username,
      loginData.invalidUsername.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
      .toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('should show an error message with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
      .toHaveText('Epic sadface: Username and password do not match any user in this service');
  });
  test('should show an error message with missing username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.missingUsername.username,
      loginData.missingUsername.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
      .toHaveText('Epic sadface: Username is required');
  });
  test('should show an error message with missing password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.missingPassword.username,
      loginData.missingPassword.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
      .toHaveText('Epic sadface: Password is required');
  });
});