import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/view_cart');
  }

  async assertProductInCart(name: string) {
    await expect(this.page).toHaveURL(/view_cart/);
    await expect(this.page.locator('.cart_description h4 a')).toHaveText(name);
  }
}
