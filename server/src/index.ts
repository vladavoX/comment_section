import express from 'express'
import cors from 'cors'
const routes = require('./routes')
import AppError from './utils/appError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

app.all(
  '*',
  (req: { originalUrl: any }, res: any, next: (arg0: any) => void) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404))
  }
)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
