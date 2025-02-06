import { BasePage } from './BasePage';

export class HoversPage extends BasePage {
    private figureProfile = this.page.locator('.figure');
    private figureHeader = '.figcaption h5';


    // Overload signatures
    async hoverOverFigure(index: number): Promise<void>;
    async hoverOverFigure(visibleText: string): Promise<void>;

    // Implementation
    async hoverOverFigure(identifier: number | string): Promise<void> {
        if (typeof identifier === 'number') {
            // Handle the case where an index is provided
            await this.figureProfile.nth(identifier - 1).hover();
        } else {
            // Handle the case where visible text is provided
            const figures = await this.figureProfile.elementHandles(); // Get all figure elements
            for (const figure of figures) {
                const header = await figure.$(this.figureHeader); // Find the header within the figure
                const text = await header?.textContent();
                if (text?.includes(identifier)) {
                    await figure.hover();
                    return;
                }
            }
            throw new Error(`Figure with text "${identifier}" not found.`);
        }
    }

    async getFigureTitle(index: number) {
        return await this.figureProfile.nth(index - 1).locator(this.figureHeader).textContent();
    }
}