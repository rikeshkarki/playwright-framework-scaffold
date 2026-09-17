import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/products');
  }

  async searchProduct(name: string) {
    await this.page.locator('#search_product').fill(name);
    await this.page.locator('#submit_search').click();
  }

  async addFirstResultToCart() {
    await this.page.locator('.product-image-wrapper .add-to-cart').first().click();
  }

  async goToCartFromModal() {
    await this.page.locator('text=View Cart').click();
  }
}
