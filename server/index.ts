import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express from 'express'
import routes from './router'

const app = express()

const corsOptions = {
    exposedHeaders: ['Content-Disposition']
  }

app.use(cors(corsOptions))
app.use(
  json({
    strict: false
  })
)
app.use(urlencoded())

routes.init()

app.listen(3001, () => {
    console.log('Server started on port 3001')
})