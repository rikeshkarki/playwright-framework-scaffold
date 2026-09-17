import { test, expect } from '@playwright/test';

test('Homepage visual snapshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  // The left-hand category panel finishes its layout slightly after load.
  await page.locator('.category-products').waitFor();

  // Mask the auto-rotating slider and ad iframes — their content changes between
  // runs regardless of the app itself, which would otherwise make this test flaky.
  const dynamicRegions = [page.locator('#slider-carousel'), page.locator('iframe')];

  expect(await page.screenshot({ mask: dynamicRegions })).toMatchSnapshot('homepage.png', {
    maxDiffPixelRatio: 0.02,
  });
});