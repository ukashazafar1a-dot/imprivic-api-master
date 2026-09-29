const express = require('express')
const router = express.Router()

const {calculatePrice, calculatePriceLona,calculatePriceCartonMicrocanal, calculatePriceXBanner} = require('../controllers/calculatorController')

router.post('/',calculatePrice).post('/lona', calculatePriceLona).post('/carton-microcanal', calculatePriceCartonMicrocanal).post('/x-banner', calculatePriceXBanner)

module.exports = router;