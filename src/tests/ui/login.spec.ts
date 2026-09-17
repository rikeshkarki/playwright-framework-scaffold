import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';
import { buildNewUser } from '../../utils/testData';

test.describe('Login', () => {
  test('valid credentials log the user in', async ({ page }) => {
    // Signup logs the new user in immediately, so log out first to exercise the login flow itself.
    const user = buildNewUser();
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await signupPage.startSignup(user.name, user.email);
    await signupPage.completeAccountInformation(user);
    await signupPage.assertAccountCreated();
    await signupPage.continueAfterAccountCreated();
    await page.locator('a[href="/logout"]').click();

    const loginPage = new LoginPage(page);
    await loginPage.login(user.email, user.password);
    await loginPage.assertLoggedInAs(user.name);

    await signupPage.deleteAccount();
    await signupPage.assertAccountDeleted();
  });

  test('invalid credentials show an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('nonexistent.user.zzz@example.com', 'WrongPass123');
    await loginPage.assertLoginError();
  });
});
