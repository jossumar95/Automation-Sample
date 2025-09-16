import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import {HealthPage} from '../../pages/HealthPage.js';
import { USERS } from '../../users.js';

test.describe('Tests for login functionality v.1 @smokeTests', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to app', async () => {
      await page.goto('/'); // uses baseURL from playwright.config
    });
  });

  test('Login with Valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const healthCarePage = new HealthPage(page);

    await test.step('Log in as valid user with a valid email and password', async () => {
      await loginPage.login(USERS.valid_user.username, USERS.valid_user.password);
    });

    await test.step('Wait for Main Healthcare Page to succesfully load', async () => {
      await healthCarePage.assertPageLoaded()
    });

  });

  test('Login with Invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const healthCarePage = new HealthPage(page);

    await test.step('Log in as invalid email and password', async () => {
      await loginPage.login(USERS.invalid_user.username, USERS.invalid_user.password);
    });

    await test.step('Wait for Main Healthcare Page to succesfully load', async () => {
      await loginPage.assertInvalidEmailPrompt()
    });

  });
});
