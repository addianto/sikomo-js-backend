import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import router from './routes/v1/index.js'

const app = express()

// Configure logger
app.use(logger('dev'))

// Parse JSON request body
app.use(express.json())

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: false }))

// TODO: Sanitise request data

// TODO: Enable gzip compression

// TODO: Enable CORS

// Use v1 API routes
app.use('/v1', router)

// Catch HTTP 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Handle general error
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
