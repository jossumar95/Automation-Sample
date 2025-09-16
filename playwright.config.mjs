import 'dotenv/config';
import { defineConfig } from '@playwright/test';
import { ENVIRONMENTS } from './config.js';
 

const ENV = process.env.TEST_ENV ?? 'prod';

export default defineConfig({
  reporter: [
    ['allure-playwright', { outputFolder: 'reports/allure' }],
    ['html', { outputFolder: 'playwright-html', open: 'never' }],
  ],
  use: {
    baseURL: ENVIRONMENTS[ENV],
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      args: ['--start-maximized'],
    },
    viewport: null,
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
});

