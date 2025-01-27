import { BasePage } from './BasePage';

export class HoversPage extends BasePage {
    private figureProfile = this.page.locator('.figure');
    private figureHeader = this.page.locator('.figcaption h5');

    async hoverOverFigure(index: number) {
       await this.figureProfile.nth(index - 1).hover();
    }

    async getFigureTitle(index: number) {
        return await this.figureProfile.nth(index - 1).locator(this.figureHeader).textContent();
    }
}