import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { HealthPage } from '../../pages/HealthPage.js';
import { USERS } from '../../users.js';

test.describe('@smokeTests Healthcare critical UI after login', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to app', async () => {
      await page.goto('/'); // relativo a baseURL
    });
  });

  test('Login and validate critical Healthcare options are visible', async ({ page }) => {
    const loginPage  = new LoginPage(page);
    const healthPage = new HealthPage(page);

    await test.step('Log in with valid credentials', async () => {
      await loginPage.login(USERS.valid_user.username, USERS.valid_user.password);
    });

    await test.step('Validate Find Doctors, My Appointments and at least one doctor card', async () => {
      await healthPage.assertCriticalUIVisible();
    });
    
  });
});
