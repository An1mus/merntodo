import {expect, test} from "@playwright/test";
import {APP_URL} from "./const";

test.describe('App general functionality', () => {
    test('App is rendered', async ({page}) => {
        await page.goto(APP_URL);

        await expect(page.getByRole('link', { name: 'List' })).toBeVisible();
    });

    test('Theme switches normally', async ({page}) => {
        await page.goto(APP_URL);
        const app = await page.getByTestId('app');
        const themeSwitch = await page.getByTestId('themeSwitch');

        await themeSwitch.click();

        await expect(app).toHaveClass(/\blight\b/);

        await themeSwitch.click();

        await expect(app).toHaveClass(/\bdark\b/);
    });
});
