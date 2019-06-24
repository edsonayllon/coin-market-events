const express = require('express');
const router = express.Router();
const scrapeIt = require("scrape-it");

var html;

const fetch = async () => {
  try {
    var scrape = await scrapeIt("https://coinmarketcal.com/en/")
    var html = scrape.body;
    var body =
  } catch(err) {
    console.log(err)
  }
}

fetch();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(html.body)
  res.send(html.body);
});

module.exports = router;
