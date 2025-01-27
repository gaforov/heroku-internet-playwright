import { defineConfig } from '@playwright/test';
import { config as appConfig } from './src/config/config';

export default defineConfig({
    testDir: './src/tests',
    timeout: 30000,
    retries: 1,
    use: {
        baseURL: appConfig.baseURL,  // Use the baseURL from config.ts
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        // {
        //     name: 'Firefox',
        //     use: { browserName: 'firefox' },
        // },
        // {
        //     name: 'WebKit',
        //     use: { browserName: 'webkit' },
        // },
    ],
});