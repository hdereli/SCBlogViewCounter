
var express = require('express');
var cors = require('cors');
var cheerio = require('cheerio'); 
var axios = require('axios');

const app = express();
app.use(cors());

app.get('/', function (req, res) {

    var url = "https://blogs.sap.com/2019/07/22/5-reasons-low-code-platforms-are-the-future-of-app-development/";
    const data = axios.get(url).then(function (response) {
        // GET Data
        // Cheerio
        const $ = cheerio.load(response.data);
        console.log(response.headers);

        const span = $('div.dm-contentHero__statistics > div > span:nth-child(2)');
        var cntText = span.text().trim();
        var iViewCount = cntText.substring(0,cntText.indexOf('Views') - 1);
        console.log(iViewCount);
        console.log(cntText);
        res.json({
          url: url,
          count: iViewCount
        });
      }).catch(function (error) {
        // error
        console.log(error);
      });
}); 

app.listen(2093, () => {
    console.log(`Example App running on port http://localhost:2093`);
});
