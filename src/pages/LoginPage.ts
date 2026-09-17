import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.page.locator('input[data-qa="login-email"]').fill(email);
    await this.page.locator('input[data-qa="login-password"]').fill(password);
    await this.page.locator('button[data-qa="login-button"]').click();
  }

  async assertLoggedInAs(name: string) {
    await expect(this.page.locator('.navbar-nav')).toContainText(`Logged in as ${name}`);
  }

  async assertLoginError() {
    await expect(this.page.locator('.login-form p')).toHaveText('Your email or password is incorrect!');
  }
}
