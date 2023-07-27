// import connection from '../config/database';
const connection = require('../config/database');
const getAllUser = async () => {
    // simple query
    // connection.query('SELECT * FROM Users u ', function (err, results, fields) {
    //     users = results;
    //     console.log('>>>data', results);
    //     console.log('>>>check', users);
    //     res.send(JSON.stringify(users));
    // });
    const [results, fields] = await connection.query('SELECT * FROM Users u');
    return results;
};
const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * from Users WHERE id = ?`,
        [userId]
    );
    // console.log(results[0]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};
const updateUserById = async (email, name, address, userId) => {
    const [results, fields] = await connection.query(
        //lay dong du lieu
        `UPDATE Users 
        SET email = ?,name = ?, city =?
        WHERE id = ?`,
        [email, name, address, userId]
    );
};
const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`,
        [userId]
    );
};
module.exports = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
};
