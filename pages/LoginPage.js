import BasePage from '../utils/BaseClass.js';
import { LOGIN_PAGE_ELEMENTS } from '../locators/LoginWebElements.js';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator(LOGIN_PAGE_ELEMENTS.emailInput);
    this.passwordInput = page.locator(LOGIN_PAGE_ELEMENTS.passwordInput);
    this.signInButton = LOGIN_PAGE_ELEMENTS.signInButton(page);
    this.loginButton = LOGIN_PAGE_ELEMENTS.loginButton(page);
    this.errorMessage = LOGIN_PAGE_ELEMENTS.errorMessage(page);
  }

   async assertInvalidEmailPrompt() {
    await expect(this.errorMessage).toBeVisible();
  }

  async login(username, password) {
    await this.click(this.loginButton);                
    await this.fill(this.emailInput, username);     
    await this.fill(this.passwordInput, password);     
    await this.click(this.signInButton);              
  }
}