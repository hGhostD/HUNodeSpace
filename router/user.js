const express = require('express');
const userCon = require('../controller/user');
const router = express.Router();

router.post('/user/login', userCon.register);

router.post('/users', async (req, res, next) => {
    try {
        JSON.parse('ddddadc');
        console.info('hh        jj');
        res.send('post /users');
    } catch (error) {
        next(error);
    }
});

router.get('/user', async (req, res, next) => {
    try {
        res.send('get /user');
    } catch (error) {
        next(error);
    }
});

router.put('/user', async (req, res, next) => {
    try {
        res.send('put /user');
    } catch (error) {
        next(error);
    }
});

module.exports = router;