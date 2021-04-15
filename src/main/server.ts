const path = require('path')
var cors = require('cors');
require('dotenv').config({
  path: path.join(__dirname, `../../.env${process.argv[2]}`),
})
import 'reflect-metadata'
import express from 'express'
import routes from './config/routes'
import '../infra/database/connect'

const app = express()
app.use(cors());
app.use(express.json())
app.use('/api', routes)

app.listen(process.env.PORT, () =>
  console.log(`Server running ${process.env.PORT}`)
)
