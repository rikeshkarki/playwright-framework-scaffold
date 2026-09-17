import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { buildNewUser } from '../../utils/testData';

test.describe('Signup', () => {
  test('registers a new user and cleans up the account afterwards', async ({ page }) => {
    const user = buildNewUser();
    const signupPage = new SignupPage(page);

    await signupPage.goto();
    await signupPage.startSignup(user.name, user.email);
    await signupPage.completeAccountInformation(user);
    await signupPage.assertAccountCreated();
    await signupPage.continueAfterAccountCreated();

    await signupPage.deleteAccount();
    await signupPage.assertAccountDeleted();
  });
});
