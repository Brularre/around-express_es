const router = require('express').Router();
const path = require('path');
const readData = require('../middlewares/readData');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users/', readData(usersPath, 'usuarios', false));
router.get('/users/:id', readData(usersPath, 'usuari@', true));

module.exports = router;
