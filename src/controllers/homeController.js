const getHomePage = (req, res) => {
    res.send('hello');
};
const getABC = (req, res) => {
    res.send('abc');
};
const getNaQ = (req, res) => {
    res.render('sample.ejs');
};
module.exports = {
    getHomePage,
    getABC,
    getNaQ,
};
