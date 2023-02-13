import AppError from '../utils/appError'
import { connection } from '../services/db'

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

export { getComments }
