const express = require('express');

const router = express.Router();

router.get('/:username', async (req, res, next) => { 
    try {
        res.send('get /profile/:username');
    } catch (error) {
        next(error);
    }
});

module.exports = router;