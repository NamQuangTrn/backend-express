require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express(); //app express
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

configViewEngine(app);
//khai bao routes
app.use('/v1', webRoutes);

app.listen(port, () => {
    console.log(`${hostname}:${port}`);
});
