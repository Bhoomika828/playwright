const { test, expect } = require('../Fixtures/fixture');
import {HomePage} from '../Pages/HomePage';

test ('Login with mandate field', async({page}) => {
    const homePage = new HomePage(page);

    await homePage.Login()  
  });

test('Add products to cart and verify', async ({ homePage}) => {
    
    await homePage.clickProducts();
    await homePage.addFirstProductToCart();
    await homePage.continueShopping();
    await homePage.viewCart();
    await homePage.verifyProductsInCart();
});

test('Verify product category navigation', async ({ homePage }) => {
  
  await homePage.clickProducts();
  await homePage.verifyCategoriesVisible();
  await homePage.clickWomenCategory();
  await homePage.clickDressCategory();
  await homePage.verifyCategoryPage();
});