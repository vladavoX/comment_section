class AppError extends Error {
  error: string
  isOperational: boolean
  constructor(message: string, public statusCode: number) {
    super(message)

    this.statusCode = statusCode
    this.error = `${this.statusCode}`.startsWith('4')
      ? 'Client Error'
      : 'Server Error'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export default AppError
