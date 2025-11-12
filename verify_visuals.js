const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const pages = ['index', 'about', 'success-stories', 'services', 'contact'];

  for (const pageName of pages) {
    await page.goto(`file://${process.cwd()}/${pageName}.html`);
    await page.screenshot({ path: `${pageName}-final.png` });
  }

  await browser.close();
})();