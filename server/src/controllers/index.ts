import AppError from '../utils/appError'
import { connection } from '../services/db'

const login = (req: any, res: any, next: any) => {
  const { username, password } = req.body
  connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err: any, results: any) => {
      if (err) next(new AppError(err.message, 400))
      if (results.length === 0) {
        next(new AppError('Invalid username or password', 400))
      } else {
        res.status(200).json({
          status: 'success',
          data: {
            user: results[0],
          },
        })
      }
    }
  )
}

const register = (req: any, res: any, next: any) => {
  const { name, username, password } = req.body
  connection.query(
    'INSERT INTO users (name, username, password) VALUES (?, ?, ?)',
    [name, username, password],
    (err: any, results: any) => {
      if (err) next(new AppError(err.message, 400))
      res.status(200).json({
        status: 'success',
        data: {
          user: results[0],
        },
      })
    }
  )
}

const getUsers = async (req: any, res: any, next: any) => {
  connection.query('SELECT * FROM users', (err: any, results: any) => {
    if (err) next(new AppError(err.message, 400))
    res.status(200).json({
      status: 'success',
      data: {
        users: results,
      },
    })
  })
}

const getComments = async (req: any, res: any, next: any) => {
  connection.query('SELECT * FROM comments', (err: any, results: any) => {
    if (err) next(new AppError(err.message, 400))
    res.status(200).json({
      status: 'success',
      data: {
        comments: results,
      },
    })
  })
}

export { getComments, login, register, getUsers }
