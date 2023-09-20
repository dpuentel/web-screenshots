import express, { json } from 'express'
import { createScreenshotRouter } from './routes/screenshot-routes.js'
import 'dotenv/config'

const app = express()

app.use(json())
app.disable('x-powered-by')

app.use('/screenshot', createScreenshotRouter())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
