scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log("mo tab moi...");
      await page.goto(url);
      console.log("truy cap: " + url);
      await page.waitForSelector("#webpage");
      console.log("web load xong...");
      const dataCategory = await page.$$eval(".pt123__nav > ul > li", (els) => {
        let data = {};
        dataCategory = els.map((el) => {
          return {
            category: el.querySelector("a").innerText,
            link: el.querySelector("a").href,
          };
        });
        return dataCategory;
      });
      console.log(dataCategory);
      await page.close();
      console.log("tab da dong...");
      resolve();
    } catch (error) {
      console.log("loi o scrapeCategory: " + error);
      reject(error);
    }
  });
module.exports = {
  scrapeCategory,
};
