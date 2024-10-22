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
        await page.getByPlaceholder('username').fill(user[2]);
        await page.getByPlaceholder('password').fill(password);
        await page.getByText('login').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.getByAltText('Sauce Labs Backpack').click({force : true});
        await expect(page.getByText('Sauce Labs Fleece Jacket')).toContainText('Sauce Labs Fleece Jacket');
        await expect(page.getByText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")).toContainText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        await expect(page.getByText('$49.99')).toContainText('$49.99');
        await page.getByText('Add to cart').click();
        await expect(page.getByText('Add to cart')).toBeTruthy();
        // await expect(page.getByTestId('shopping-cart-badge')).toBeTruthy();
        // //await expect(page.getByTestId('shopping-cart-badge')).toHaveValue('1');
        // await page.getByText('1').click({force:true});
        // await expect(page.getByText('remove')).toBeTruthy();
        // await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
        // await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        // await expect(page.getByText('$29.99')).toContainText('$29.99');
        // await page.getByText('checkout').click();
        // await page.getByPlaceholder('First Name').fill('1');
        // await page.getByPlaceholder('Last Name').fill('2');
        // await expect(page.getByPlaceholder('First Name')).toBe('2');
    });
});