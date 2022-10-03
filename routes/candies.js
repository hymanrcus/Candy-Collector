import { Router } from 'express'
import * as candiesCtrl from '../controllers/candies.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/bags
router.get('/', candiesCtrl.index)
router.get('/:id', candiesCtrl.show)
router.get('/:id/edit', candiesCtrl.edit)
router.put('/:id',isLoggedIn, candiesCtrl.update)
router.post('/', isLoggedIn, candiesCtrl.create)
router.delete('/:id', isLoggedIn, candiesCtrl.delete)

export {
  router
}
