import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { KeyPressesPage } from './KeyPressesPage';
import { HoversPage } from './HoversPage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly keyPressesPage: KeyPressesPage;
  private readonly hoversPage: HoversPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.keyPressesPage = new KeyPressesPage(this.page);
    this.hoversPage = new HoversPage(this.page);
  }

  // Getter methods to access page objects
  get onLoginPage() {
    return this.loginPage;
  }

  get onKeyPressesPage() {
    return this.keyPressesPage;
  }

  get onHoversPage() {
    return this.hoversPage;
  }
}
