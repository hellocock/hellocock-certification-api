const express = require('express');
const {
       getkakaocert,
       getverifyauthstate,
      } = require('../controllers/userController');

const router = express.Router();

router.get('/user/:id',  getkakaocert);
router.post('/user/verify/:id',  getverifyauthstate);

module.exports = {
    routes: router
}
