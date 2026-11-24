import {test, chromium } from "@playwright/test";


test('Amazon', async()=>{
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage()

  await page.goto("https://www.amazon.in/");

    //await page.locator("//select[@title='Search in']").selectOption({ value: "search-alias=alexa-skills" });
    await page.locator("//select[@title='Search in']").selectOption("search-alias=alexa-skills");
  
})




test('Multi select', async()=>{
  
  const browser = await chromium.launch();
  const context1 = await browser.newContext();
  const page1 = await context1.newPage()

  await page1.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  await page1.getByRole("button", {name:"Multi-Select"}).click()
  //await page1.locator("//button[text()='Multi-Select']").click();
  await page1.locator(".form-multiselect").selectOption([{value:"option1"},{value:"option2"}])
    //await page1.locator("[multiple]").selectOption({value:"option1"})
  //   await page1.locator("[multiple]").selectOption({label:"Option 5"})
})

test('Upload', async({page})=>{

  await page.goto("https://uploadnow.io/")
  await page.locator('//input[@type="file"]').setInputFiles('./screenshot/insta_title.png')
  await page.getByText('Validate and upload').click();
  
})