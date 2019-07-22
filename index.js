
var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/', async (req, res, next) => {
    
    
    res.json({ test: 1 });


});

app.listen(2093, () => {
    console.log(`Example App running on port http://localhost:2093`);
});
