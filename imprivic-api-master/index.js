const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();
const cors = require('cors');

const variants = require('./routes/variant')
const calculators = require('./routes/calculator')
const assets = require('./routes/asset')

const app = express();

app.use(cors({
    origin: ['https://imprivicshop.com','https://imprivic-shop.myshopify.com','http://localhost:5173']
}));

app.use(express.json());

app.use('/api/variant', variants);
app.use('/calculate', calculators);
app.use('/asset', assets);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
