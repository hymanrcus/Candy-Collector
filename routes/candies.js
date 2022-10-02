import { Router } from 'express'
import * as candiesCtrl from '../controllers/candies.js'

const router = Router()

// GET localhost:3000/bags
router.get('/', candiesCtrl.index)

export {
  router
}
