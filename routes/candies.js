import { Router } from 'express'
import * as candiesCtrl from '../controllers/candies.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/bags
router.get('/', candiesCtrl.index)
router.get('/:id', candiesCtrl.show)
router.put('/:id',isLoggedIn, candiesCtrl.update)
router.get('/:id/edit', candiesCtrl.edit)
router.post('/', isLoggedIn, candiesCtrl.create)

export {
  router
}
