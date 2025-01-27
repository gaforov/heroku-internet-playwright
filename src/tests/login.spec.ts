import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

test('Valid Login', async ({ page }) => {
    const pm = new PageManager(page);
    
    await pm.onLoginPage.navigateTo('/login');
    await pm.onLoginPage.login('tomsmith', 'SuperSecretPassword!');
    const successMessage = await pm.onLoginPage.getSuccessMessage();
    expect(successMessage).toContain('You logged into a secure area!');
});