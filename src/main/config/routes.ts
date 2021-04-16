import { Request, Response, Router } from 'express'
import { createCompanyController } from '../../presentation/controllers/company/createController'
import { deleteCompanyController } from '../../presentation/controllers/company/deleteController'
import { getCompanyController } from '../../presentation/controllers/company/getController'
import { paginateCompanyController } from '../../presentation/controllers/company/paginateController'
import { readCompanyController } from '../../presentation/controllers/company/readController'
import { updateCompanyController } from '../../presentation/controllers/company/updateController'
import { loginController } from '../../presentation/controllers/login'
import { registerController } from '../../presentation/controllers/register'
import { userController } from '../../presentation/controllers/user'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()
router.post('/login', (request: Request, response: Response) => {
  return loginController.login(request, response)
})
router.post('/register', (request: Request, response: Response) => {
  return registerController.register(request, response)
})
router.get('/company', (request: Request, response: Response) => {
  return readCompanyController.read(request, response)
})
router.post('/company', authMiddleware, (request: Request, response: Response) => {
  return createCompanyController.create(request, response)
})
router.delete('/company/:id', authMiddleware, (request: Request, response: Response) => {
  return deleteCompanyController.delete(request, response)
})
router.get('/company/:id', (request: Request, response: Response) => {
  return getCompanyController.get(request, response)
})
router.put('/company/:id', authMiddleware, authMiddleware, (request: Request, response: Response) => {
  return updateCompanyController.update(request, response)
})
router.get('/company/:page/:perPage', (request: Request, response: Response) => {
  return paginateCompanyController.paginate(request, response)
})
router.get('/me', authMiddleware, (request: Request, response: Response) => {
  return userController.user(request, response)
})


export default router
