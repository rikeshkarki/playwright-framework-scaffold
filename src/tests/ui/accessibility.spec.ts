import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// NOTE: this currently fails against the real automationexercise.com homepage
// (an icon-only "subscribe" button with no accessible name, low-contrast nav
// links, and unlabelled carousel arrows). That's expected here — it shows the
// test is genuinely checking, not silently passing like the original version
// (which called axe but never asserted on the results). See README.md.
test('Homepage has no critical or serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();

  const seriousOrWorse = results.violations.filter(
    (v) => v.impact === 'critical' || v.impact === 'serious'
  );

  expect(seriousOrWorse, JSON.stringify(seriousOrWorse, null, 2)).toEqual([]);
});
