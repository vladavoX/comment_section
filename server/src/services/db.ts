import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'comment_section',
})

connection.connect((err: any) => {
  if (err) throw err
  console.log('Connected to database!')
})

export { connection }
