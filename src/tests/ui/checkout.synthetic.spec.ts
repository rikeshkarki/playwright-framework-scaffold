import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';

test('Synthetic: add to cart smoke check @synthetic', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchProduct('Top');
  await productsPage.addFirstResultToCart();
  await productsPage.goToCartFromModal();
  await expect(page).toHaveURL(/view_cart/);
});
