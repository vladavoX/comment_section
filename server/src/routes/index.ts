import express from 'express'
const controllers = require('../controllers')
const router = express.Router()

router.route('/').get(controllers.getComments)

// router.route('/login').post(controllers.login)
router.route('/register').post(controllers.register)

module.exports = router
