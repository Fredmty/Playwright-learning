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
    

test.describe('failed login', () => {
    test('failed login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('username').fill(user[1]);
    await page.getByPlaceholder('password').fill(password);
    await page.getByText('login').click();
    await expect(page.getByText('Sorry, this user has been locked out.')).toContainText('Sorry, this user has been locked out.');
    });
});