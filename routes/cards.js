const router = require('express').Router();
const path = require('path');
const readData = require('../middlewares/readData');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', readData(cardsPath, 'tarjetas', false));

module.exports = router;
