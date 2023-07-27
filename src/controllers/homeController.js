const connection = require('../config/database');
const User = require('../models/users');
const {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../services/crud');

require('dotenv').config();

const getHomePage = async (req, res) => {
    let results = await User.find({});
    console.log(results);
    res.render('homePage.ejs', { listUsers: results });
};
const getUpdatePage = async (req, res) => {
    const userId = req.params.userId;
    // console.log('>>>check results:', results);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user });
};
const postUpdateUser = async (req, res) => {
    let { userId, email, name, address } = req.body;
    await User.updateOne(
        { _id: userId },
        { email: email, name: name, city: address }
    );
    // res.send('update');
    res.redirect('/v1');
};
const getABC = (req, res) => {
    res.send('abc');
};
const getNaQ = (req, res) => {
    res.render('sample.ejs');
};
const getCreatePage = (req, res) => {
    res.render('create.ejs');
};
const getDeletePage = async (req, res) => {
    const userId = req.params.userId;
    // console.log('>>>check results:', results);
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user });
};
const postDeleteUser = async (req, res) => {
    const userId = req.body.userId;
    await User.deleteOne({
        _id: userId,
    });
    res.redirect('/v1');
};
const postCreateUser = async (req, res) => {
    // lay du lieu tu input
    let { email, name, address } = req.body;
    // const [results, fields] = await connection.query(
    //     //lay dong du lieu
    //     `INSERT INTO Users(email, name, city)
    //     VALUES( ?,?,?)`,
    //     [email, name, address]
    // );
    // console.log('>>>check results:', results);
    await User.create({
        email: email,
        name: name,
        city: address,
    });
    //or
    // await User.create({
    //     email,
    //     name,
    //     city,
    // });
    res.send('succeed!');
};

module.exports = {
    getHomePage,
    getABC,
    getNaQ,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser,
};
