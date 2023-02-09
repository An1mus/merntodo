import {test} from "@playwright/test";

test.describe('Stats section display', () => {
    test('Stats page is opened and chart is visible', async ({page}) => {
        const link = await page.getByText('Stats');
        await link.click();
        const chart =  page.locator('svg');

        expect(chart).toBeVisible();
    });
});
