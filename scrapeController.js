const { scrapeCategory } = require("./scraper");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  try {
    let browser = await browserInstance;
    //goi ham cao o day
    let categories = scrapeCategory(browser, url);
  } catch (error) {
    console.log("Loi scrapeController: " + error);
  }
};
module.exports = scrapeController;
