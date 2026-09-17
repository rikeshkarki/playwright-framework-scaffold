import { test } from '@playwright/test';
import { ProductsApiService } from '../../services/ProductsApiService';
import { validateSchema } from '../../utils/schemaValidator';

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    price: { type: 'string' },
    brand: { type: 'string' },
    category: {
      type: 'object',
      properties: {
        category: { type: 'string' },
      },
      required: ['category'],
    },
  },
  required: ['id', 'name', 'price', 'brand', 'category'],
};

test('Each product in the catalog matches the expected schema', async ({ request }) => {
  const productsApi = new ProductsApiService(request);
  const res = await productsApi.getProductsList();
  const body = await res.json();

  for (const product of body.products) {
    validateSchema(productSchema, product);
  }
});
