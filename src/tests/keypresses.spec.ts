import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

test('Enter Key Test', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onKeyPressesPage.navigateTo('/key_presses');
    await pm.onKeyPressesPage.enterText('A');
    const result = await pm.onKeyPressesPage.getResultText();
    expect(result).toContain('You entered: A');
});