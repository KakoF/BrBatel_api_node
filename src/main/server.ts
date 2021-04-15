const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, `../../.env${process.argv[2]}`),
})
import 'reflect-metadata'
import express from 'express'
import routes from './config/routes'
import '../infra/database/connect'
import { pagination } from 'typeorm-pagination'

const app = express()

app.use(express.json())
app.use(pagination);
app.use('/api', routes)

app.listen(process.env.PORT, () =>
  console.log(`Server running ${process.env.PORT}`)
)
