const express = require('express');
const router = express.Router();
// router.method('/route', handler)
const {
    getHomePage,
    getABC,
    getNaQ,
} = require('../controllers/homeController');

//router
router.get('/', getHomePage); // chi tham chieu den ham gethomepage
router.get('/abc', getABC);
router.get('/namquang', getNaQ);

module.exports = router;
