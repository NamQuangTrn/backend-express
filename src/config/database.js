// get the client
const mongoose = require('mongoose');
require('dotenv').config();

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//     idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//     queueLimit: 0,
//     enableKeepAlive: true,
//     keepAliveInitialDelay: 0,
// });

const connection = async () => {
    const dbState = [
        { value: 0, label: 'Disconnected' },
        { value: 1, label: 'Connected' },
        { value: 2, label: 'Connecting' },
        { value: 3, label: 'Disconnecting' },
    ];
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
    console.log(
        dbState.find((f) => f.value === state).label,
        'to db:',
        options.dbName
    ); // connected to db
};

module.exports = connection;
