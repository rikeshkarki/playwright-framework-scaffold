import { Page, expect } from '@playwright/test';

export interface NewUser {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export class SignupPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  /** Fills the "New User Signup!" name/email mini-form on the login page. */
  async startSignup(name: string, email: string) {
    await this.page.locator('input[data-qa="signup-name"]').fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
    await this.page.locator('button[data-qa="signup-button"]').click();
  }

  /** Fills the "Enter Account Information" page shown after startSignup(). */
  async completeAccountInformation(user: NewUser) {
    await expect(this.page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    await this.page.locator('#id_gender1').check();
    await this.page.locator('#password').fill(user.password);
    await this.page.locator('#days').selectOption('10');
    await this.page.locator('#months').selectOption('5');
    await this.page.locator('#years').selectOption('1995');

    await this.page.locator('#first_name').fill(user.firstName);
    await this.page.locator('#last_name').fill(user.lastName);
    await this.page.locator('#address1').fill(user.address);
    await this.page.locator('#country').selectOption(user.country);
    await this.page.locator('#state').fill(user.state);
    await this.page.locator('#city').fill(user.city);
    await this.page.locator('#zipcode').fill(user.zipcode);
    await this.page.locator('#mobile_number').fill(user.mobileNumber);

    await this.page.locator('button[data-qa="create-account"]').click();
  }

  async assertAccountCreated() {
    await expect(this.page.locator('h2[data-qa="account-created"]')).toHaveText('Account Created!');
  }

  async continueAfterAccountCreated() {
    await this.page.locator('[data-qa="continue-button"]').click();
  }

  async deleteAccount() {
    await this.page.locator('a[href="/delete_account"]').click();
  }

  async assertAccountDeleted() {
    await expect(this.page.locator('h2[data-qa="account-deleted"]')).toHaveText('Account Deleted!');
  }
}
