import {test, expect} from '@playwright/test';
import {APP_URL} from "./const";

const TODO_URL = 'http://localhost:3000/';

test.describe('Todo items addition', () => {
    test('An item was added with correct name and description', async ({page}) => {
        await page.goto(APP_URL);

        const TODO_NAME = 'New todo item';
        const TODO_DESCRIPTION = 'This is a dummy description for todo item';

        await addItemToThePage(page, TODO_NAME, TODO_DESCRIPTION);

        const list = await page.getByTestId('list');
        const nameParagraph = list.getByText(TODO_NAME);
        const nameDescription = list.getByText(TODO_DESCRIPTION);

        expect(nameParagraph).toBeTruthy();
        expect(nameDescription).toBeTruthy();
    });

    test('The item is removed after being added', async ({page}) => {
        await page.goto(APP_URL);

        const TODO_NAME = 'Another todo item';
        const TODO_DESCRIPTION = 'A bit different description';

        await addItemToThePage(page, TODO_NAME, TODO_DESCRIPTION);

        const elementsBeforeDeletion = await page.locator('#list > div').count();

        // Click on delete button
        await page.locator('#list > div').first().locator('button').click();

        const elementsAfterDeletion = await page.locator('#list > div').count();

        expect(elementsBeforeDeletion - elementsAfterDeletion).toEqual(1);
    });
});

const addItemToThePage = async (page: any, name: string, description: string) => {
    await page.locator('input#name').fill(name)
    await page.locator('textarea#description').fill(description);
    await page.locator('button#confirm').click();
}
