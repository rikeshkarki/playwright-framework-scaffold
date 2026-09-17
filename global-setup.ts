import { chromium, FullConfig } from '@playwright/test';

/**
 * automationexercise.com shows a cookie/ad-consent overlay on first visit that
 * intercepts clicks until dismissed. Dismissing it once here and reusing the
 * resulting storage state for every test avoids every Page Object having to
 * handle it individually.
 */
export default async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL as string);
  await page
    .getByRole('button', { name: 'Consent' })
    .click({ timeout: 5000 })
    .catch(() => {
      // Banner didn't appear (e.g. re-running against a different target) — nothing to dismiss.
    });

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}
