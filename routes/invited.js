const express = require('express')
const router = express.Router()
const controller = require('../controllers/invited')
const verificarJWT = require('../middleware/verificarJWT')

router.get('/invited/:id', controller.getInvited)
router.patch('/invited/:id', controller.patchInvited)
router.post('/invited', verificarJWT, controller.postInvited)

module.exports = router
