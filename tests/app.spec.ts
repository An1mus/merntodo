import {expect, test} from "@playwright/test";

const DARK_CLASS_LIST = 'app dark';
const LIGHT_CLASS_LIST = 'app light';

const html = `<!DOCTYPE html>
<html><body><div data-testid="app" class="foo bar baz">hi</div></body></html>`;

test.describe('App general functionality', () => {
    test('App is present', async ({page}) => {
        const app = await page.getByTestId('app');

        expect(app).toBeTruthy();
    });

    test('Theme switches normally', async ({page}) => {
        const app = await page.getByTestId('app');
        const themeSwitch = await page.getByTestId('themeSwitch');

        const classList = await app.evaluate(el => el);
    });
});
