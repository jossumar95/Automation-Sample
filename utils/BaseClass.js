
export default class BasePage {
  constructor(page) {
    this.page = page;
    this.defaultTimeout = 5000;
  }

  _loc(target) {
    if (typeof target === 'string') return this.page.locator(target);
    return target; // ya es un Locator
  }

  async click(target) {
    await this._loc(target).click({ timeout: this.defaultTimeout });
  }

  async fill(target, text) {
    await this._loc(target).fill(text, { timeout: this.defaultTimeout });
  }

  async getText(target) {
    return await this._loc(target).innerText({ timeout: this.defaultTimeout });
  }
}