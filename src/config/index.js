import 'dotenv/config' // Equivalent to `require('dotenv').config()`

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbFilePath: process.env.DB_FILE_PATH || 'data/database.json'
}
