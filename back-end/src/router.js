import express from 'express'

import user from './controller/userController.js'
import login from './controller/loginController.js'
import actor from './controller/actorController.js'
import {verifyToken} from './Middleware/jwt.js'

const router = express()


// const router = express()

router.use('/user', user)
router.use('/login',login)
// router.use('/actor',verifyToken,actor)
router.use('/actor',actor)


export default router