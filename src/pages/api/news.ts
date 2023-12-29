import { getRequestOptions } from '../../db/setup';
import { chromium } from 'playwright';

export async function GET() {
  const news = [];
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
      ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
  });
  const page = await context.newPage();

  await page.goto('https://www.formula1.com/en.html');

  const other_news = await page.$$eval('.f1-cc.f1-cc--curated-white', (elements) => elements.map((el) => {
    const title = el.querySelector('.f1--s')?.innerHTML;
    const imgSrc = el.querySelector('.f1-cc--photo img')?.getAttribute('data-src');
    if (!title || !imgSrc) return;
    return {
      title,
      image: imgSrc
    }
  }));

  const filtered_news = other_news.filter((el) => el !== undefined);
  news.push(...filtered_news);

  await browser.close();

  return new Response(
    JSON.stringify(news), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}