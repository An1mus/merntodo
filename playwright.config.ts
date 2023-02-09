import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    projects: [
        {
            name: 'chromium',
            use: {
                baseURL: 'http://localhost:3000/',
                ignoreHTTPSErrors: true,
                video: 'on-first-retry',
                colorScheme: 'dark',
                launchOptions: {
                    headless: true,
                    slowMo: 1500,
                },
                ...devices['Desktop Chrome'],
            },
        }
    ],
});
