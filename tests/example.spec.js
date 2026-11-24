import{test} from '@playwright/test'

test('launch flipkart', async({page})=>{

   await page.goto("https://www.flipkart.com/");
   const flip_url = await page.url();
   console.log(flip_url)
   const flipkart_title = await page.title();
   console.log(flipkart_title);
   await page.goto("https://ww.instagram.com/");
   const insta_title = await page.title();
   console.log(insta_title);
    await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\insta1.jpg"});
   //await page.screenshot({path:"./screenshot1/insta.png"})
   const insta_url = await page.url();
   console.log(insta_url);
   await page.goBack();
   console.log(await page.url());
     await page.goto("https://www.flipkart.com/");
   console.log(await page.url());

    await page.goto("https://www.flipkart.com/");
   console.log(await page.url());

  // await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\screenshot1.jpg"});
   

})


test('launch amazon', async({page})=>{

   await page.goto("https://www.amazon.in/");
   const amaz_url = await page.url();
   console.log(amaz_url);
   await page.goto("https://www.makemytrip.com/")
   const mmy_title = await page.title();
   console.log(mmy_title)
   await page.goto("https://www.facebook.com/")
   await page.goBack();
   await page.goBack();


})





