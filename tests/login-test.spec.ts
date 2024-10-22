import { test, expect, type Page } from '@playwright/test';


// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
//   });

  const user = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
      ] as const;
    
      const password = 'secret_sauce'
    
    const user_info = [
        'Frederico',
        'Thofehrn',
        '9999999'
    ]

test.describe('New Todo', () => {

    test('make login standard user', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('username').fill(user[0]);
        await page.getByPlaceholder('password').fill(password);
        await page.getByText('login').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.getByAltText('Sauce Labs Backpack').click({force : true});
        await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
        await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(page.getByText('$29.99')).toContainText('$29.99');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
        await page.getByText('Add to cart').click();
        await expect(page.getByText('remove')).toBeTruthy();
        await expect(page.getByTestId('shopping-cart-badge')).toBeTruthy();
        //await expect(page.getByTestId('shopping-cart-badge')).toHaveValue('1');
        await page.getByText('1').click({force:true});
        await expect(page.getByText('remove')).toBeTruthy();
        await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
        await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(page.getByText('$29.99')).toContainText('$29.99');
        await page.getByText('checkout').click();
        await page.getByPlaceholder('First Name').fill(user_info[0]);
        await page.getByPlaceholder('Last Name').fill(user_info[1]);
        await page.getByPlaceholder('Zip/Postal Code').fill(user_info[2]);
        await page.getByText('Continue').click();
        await page.getByText('Finish').click();
        await expect(page.getByText('Checkout:Complete!')).toBeTruthy();
        await expect(page.getByText('Thank you for your order!')).toBeTruthy();
    });

    // test ('search product', async ({page}) => {
    //     await page.getByAltText('Sauce Labs Backpack').click({force : true});
    //     await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
    //     await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    //     await expect(page.getByText('$29.99')).toContainText('$29.99');
    //     await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
    //     //await page.getByLabel('add-to-cart-sauce-labs-backpack').click();
    //     //await expect(page.getByText('$29.99')).toContainText('$29.99');
    // });
    
    // test('cart', async ({page}) => {
    //     await page.getByLabel('add-to-cart').click();
    //     await expect(page.getByText('remove')).toBeTruthy();
    //     await expect(page.getByTestId('shopping-cart-badge')).toBeTruthy();
    //     await expect(page.getByTestId('shopping-cart-badge')).toHaveValue('1');
    
    
    
    //     /* await page.getByLabel('user-name').fill(user[0]);
    //     await page.getByLabel('password').fill(password);
    //     await page.getByText('login').click();
    //     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); */
    // });
    
    // test('make the buy', async ({page}) => {
    //     await page.getByTestId('shopping-cart-link').click();
    //     await expect(page.getByText('remove')).toBeTruthy();
    //     await expect(page.getByText('Sauce Labs Backpack')).toContainText('Sauce Labs Backpack');
    //     await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    //     await expect(page.getByText('$29.99')).toContainText('$29.99');
    //     await page.getByText('checkout').click();
    //     await page.getByLabel('first-name').fill(user_info[0]);
    //     await page.getByLabel('last-name').fill(user_info[1]);
    //     await page.getByLabel('postal-code').fill(user_info[2]);
    //     await page.getByTestId('continue').click();
    //     await page.getByTestId('finish').click();
    //     await expect(page.getByText('Checkout:Complete!')).toBeTruthy();
    //     await expect(page.getByText('Thank you for your order!')).toBeTruthy();
    // });
})