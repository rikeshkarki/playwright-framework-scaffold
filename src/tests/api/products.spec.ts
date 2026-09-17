import { test, expect } from '@playwright/test';
import { ProductsApiService } from '../../services/ProductsApiService';

test.describe('Products API', () => {
  test('productsList returns a non-empty product catalog', async ({ request }) => {
    const productsApi = new ProductsApiService(request);

    const res = await productsApi.getProductsList();
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('brandsList returns a non-empty brand list', async ({ request }) => {
    const productsApi = new ProductsApiService(request);

    const res = await productsApi.getBrandsList();
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.brands)).toBeTruthy();
    expect(body.brands.length).toBeGreaterThan(0);
  });
});
