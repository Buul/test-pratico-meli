const { getProductQuery, getProductById } = require('./model/products')
const dotenv = require('dotenv')
const express = require('express')
const allowCors = require('./cors')

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(allowCors)
app.get('/api/items/', async (req, res) => {
  var response = await getProductQuery(req.query)
  res.json(response)
})

app.get('/api/items/:id', async (req, res) => {
  var response = await getProductById(req.params.id)
  res.json(response)
})

app.listen(process.env.PORT)
