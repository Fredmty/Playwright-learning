import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

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

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
});
//make test describe to isolate 
test('make login standard user', async ({page}) => {
    await page.getByLabel('user-name').fill(user[0]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('make login locked out user', async ({page}) => {
    await page.getByLabel('user-name').fill(user[1]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    await expect(page.getByText('Sorry, this user has been locked out.')).toContainText('Sorry, this user has been locked out.');

    await expect(page).toHaveURL('https://www.saucedemo.com');
});

test('make login problem user', async ({page}) => {
    await page.getByLabel('user-name').fill(user[2]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    //add to cart
    //cant finish the checkout
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('make login perfomance', async ({page}) => {
    await page.getByLabel('user-name').fill(user[3]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    //takes longer to login and to go back to the screen
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('make login error ', async ({page}) => {
    await page.getByLabel('user-name').fill(user[4]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    //bolt shirt, fleect jact and test all things can't be added to cart
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('make login visual user', async ({page}) => {
    await page.getByLabel('user-name').fill(user[5]);
    await page.getByLabel('password').fill(password);
    await page.getByText('login').click();
    //checkout wrong plcae
    //different prices
    //differnt images 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


