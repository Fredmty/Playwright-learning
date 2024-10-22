import { test, expect, type Page } from '@playwright/test';

const user = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
      ] as const;
    
      const password = 'secret_sauce'
    

test.describe('problem user', () => {
    test('problem user', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('username').fill(user[4]);
        await page.getByPlaceholder('password').fill(password);
        await page.getByText('login').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.getByAltText('Sauce Labs Backpack').click({force : true});
        await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
        await expect(page.getByText('A description should be here, but it failed to render! This error has been reported to Backtrace.')).toContainText('A description should be here, but it failed to render! This error has been reported to Backtrace.');
        await expect(page.getByText('$29.99')).toContainText('$29.99');
        await page.getByText('Add to cart').click();
        await page.getByText('Remove').click();
        await expect(page.getByText('Remove')).toBeTruthy();
    });
});