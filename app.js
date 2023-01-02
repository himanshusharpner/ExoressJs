const express = require('express');
const bodyParser = require('body-parser');

const app = express();

 app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
  });

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found!</h1>');
});

app.listen(3000);
