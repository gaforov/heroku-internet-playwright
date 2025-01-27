import { BasePage } from './BasePage';

export class KeyPressesPage extends BasePage {
    private inputField = this.page.locator('#target');
    private resultText = this.page.locator('#result');

    async enterText(key: string) {
        await this.inputField.click();
        await this.page.keyboard.press(key);
    }

    async getResultText() {
        return await this.resultText.textContent();
    }
}