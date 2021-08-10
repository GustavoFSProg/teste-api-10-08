import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes'

dotenv.config()

const api = express()

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use(route)

api.listen(PORT, () => {
  console.log(`Api running on Port: ${PORT}`)
})

export default api
