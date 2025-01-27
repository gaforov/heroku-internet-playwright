import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(path: string) {
        await this.page.goto(path);
    }

    async waitForSeconds(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
}