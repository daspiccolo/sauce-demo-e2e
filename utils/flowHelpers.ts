import { Page } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';

export async function navigateToCheckout(page: Page) {
  const loginPage = new LoginPage(page);    
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();
}