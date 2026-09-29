const express = require('express')
const router = express.Router()
const {upload} = require('../helpers/multer-config')

const {getVariantID} = require('../controllers/variantController')

router.post('/',upload.single('file'),getVariantID)

module.exports = router;