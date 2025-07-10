import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto(process.env.baseURL || "http://localhost:5173");

  await page.locator("button").click();
  await expect(page.locator("button")).toHaveText("1");
});