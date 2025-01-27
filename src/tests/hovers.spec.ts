import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

test('Hover Over User 1', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onHoversPage.navigateTo('/hovers');
    await pm.onHoversPage.hoverOverFigure(1);
    const title = await pm.onHoversPage.getFigureTitle(1);
    expect(title).toContain('name: user1');
});