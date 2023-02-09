import {expect, test} from "@playwright/test";
import {APP_URL} from "./const";

test.describe('Stats section display', () => {
    test('Stats page is opened and chart is visible', async ({page}) => {
        await page.goto(APP_URL);

        const link = await page.getByText('Stats');
        await link.click();

        await page.waitForURL('#/stats');

        const chart =  page.locator('#heatmap');

        await expect(chart).toBeVisible();
    });
});
