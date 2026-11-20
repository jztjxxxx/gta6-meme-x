import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
await page.goto('file://' + path.join(dir, 'meme.html'));
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(dir, 'meme.png') });
await browser.close();
console.log('rendered meme.png');
