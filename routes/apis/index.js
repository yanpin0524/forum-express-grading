const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')

router.use('/admin', authenticated, authenticatedAdmin, admin)

router.get('/restaurants/:id', authenticated, restController.getRestaurant)
router.get('/restaurants', authenticated, restController.getRestaurants)

router.post('/signup', userController.signUp)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

router.use('/', apiErrorHandler)

module.exports = router
