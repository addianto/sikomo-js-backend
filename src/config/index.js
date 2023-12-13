import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
