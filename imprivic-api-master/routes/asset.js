const express = require('express')
const router = express.Router()

const {uploadFile} = require('../controllers/AssetController')

router.post('/upload',uploadFile)

module.exports = router;