import { test } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart', () => {
  test('a searched product can be added to the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.goto();
    await productsPage.searchProduct('Top');
    await productsPage.addFirstResultToCart();
    await productsPage.goToCartFromModal();

    const cartPage = new CartPage(page);
    await cartPage.assertProductInCart('Blue Top');
  });
});
