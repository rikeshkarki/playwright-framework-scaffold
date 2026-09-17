import { APIRequestContext } from '@playwright/test';

export class ProductsApiService {
  constructor(private request: APIRequestContext) {}

  async getProductsList() {
    return this.request.get('/api/productsList');
  }

  async getBrandsList() {
    return this.request.get('/api/brandsList');
  }
}
