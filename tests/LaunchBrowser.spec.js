import {test, chromium} from '@playwright/test'

test("title", async()=>{
  const browser =  await chromium.launch();
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto("https://www.flipkart.com/");
  await page1.goto("https://www.instagram.com/");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.instagram.com/");

})

test("Search mobile", async({page})=>{
await page.goto("https://www.amazon.in/");
await page.locator("#twotabsearchtextbox").fill("mobiles");
await page.locator("[type = 'submit']").click();

})

test("DemoQA", async({page})=>{
  await page.goto("https://demoqa.com/text-box");
  await page.locator("[placeholder='Full Name']").fill("Nishanth");
  await page.locator("input[type='email']").fill("nishanth@gmail.com")
  await page.locator("[placeholder*='Current']").fill("Enter the current address")
  await page.locator("[id='permanentAddress']").fill("Enter permanent address")
  await page.locator("#submit").click

})