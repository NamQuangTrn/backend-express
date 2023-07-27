require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
// const mongoose = require('mongoose');
const connection = require('./config/database');

const app = express(); //app express
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

//khai bao routes
app.use('/v1', webRoutes);

// connection.query('SELECT * FROM Users u ',
// function (err, results, fields) {
//     console.log('>>>results', results); // results contains rows returned by server
// });

//model
// const silence = new Kitten({ name: 'Quang kui' });
// silence.save();

(async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`${hostname}:${port}`);
        });
    } catch (error) {
        console.log('>>> connect error: ', error);
    }
})();
