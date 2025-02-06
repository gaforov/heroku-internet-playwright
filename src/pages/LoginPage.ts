import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private usernameInput = this.page.locator('#username');
    private passwordInput = this.page.locator('#password');
    private loginButton = this.page.locator('button[type="submit"]');
    private successMessage = this.page.locator('.flash.success');

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}
