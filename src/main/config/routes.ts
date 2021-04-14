import { Request, Response, Router } from 'express'
import { loginController } from '../../presentation/controllers/Login'
import { registerController } from '../../presentation/controllers/Register'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()
router.post('/login', (request: Request, response: Response) => {
  return loginController.login(request, response)
})
router.post('/register', (request: Request, response: Response) => {
  return registerController.register(request, response)
})
router.get('/auth', authMiddleware, (request: Request, response: Response) => {
  return response.send('Autenticado')
})
//creatUserController.store(request))
/*router.get('/users', authMiddleware, UserController.index)
router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)*/

export default router
