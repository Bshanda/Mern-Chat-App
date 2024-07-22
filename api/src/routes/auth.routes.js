import express from 'express'
import authController from '../controllers/auth.controller.js'
import Paths from '../constants/Paths.js'
import isLoggedIn from '../shared/middelware/isLoggedIn.js'

const router = express.Router()

router.post(Paths.Auth.Signup, authController.signUp)

router.post(Paths.Auth.Login, authController.login)

router.get(Paths.Auth.Logout, authController.logout)

router.get(Paths.Auth.validToken,isLoggedIn ,authController.checkToken)

export default router
