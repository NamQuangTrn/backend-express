const express = require('express');
const router = express.Router();
// router.method('/route', handler)
const {
    getHomePage,
    getABC,
    getNaQ,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser,
} = require('../controllers/homeController');

//router
router.get('/', getHomePage); // chi tham chieu den ham gethomepage
router.get('/abc', getABC);
router.get('/namquang', getNaQ);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.get('/update/:userId', getUpdatePage);
router.post('/update-user', postUpdateUser);
router.get('/delete/:userId', getDeletePage);
router.post('/delete-user', postDeleteUser);

module.exports = router;
