import Router from 'express'
import getAll from '../src/controllers/userController'

const route = Router()

route.get('/', getAll)

export default route
