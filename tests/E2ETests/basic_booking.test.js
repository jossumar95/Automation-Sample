import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { HealthPage } from '../../pages/HealthPage.js';
import { USERS } from '../../users.js';

test.describe('@E2E Book Appointment Flow', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to app', async () => {
      await page.goto('/');
    });
  });

  test('Login and validate critical Healthcare options are visible', async ({ page }, testInfo) => {
    const loginPage  = new LoginPage(page);
    const healthPage = new HealthPage(page);

    await test.step('Log in with valid credentials', async () => {
      await loginPage.login(USERS.valid_user.username, USERS.valid_user.password);
    });

    await test.step('Validate Find Doctors, My Appointments and at least one doctor card', async () => {
      await healthPage.assertCriticalUIVisible();

      
      await testInfo.attach('ui-state.png', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    });

    await test.step('Book Appointment Steps', async () => {
      await healthPage.bookAppointmentFlow('This is a test appointment');
    });
  });
});
