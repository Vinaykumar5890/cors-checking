const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const BrandName = require('./model')
const app = express()
app.use(express.json())
app.use(cors())
mongoose
  .connect(
    'mongodb+srv://devaragarivinayyadav:vinay@cluster0.xpaa0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err))

app.post('/brand', async (req, res) => {
  const {brandname} = req.body
  try {
    const newData = new BrandName({brandname})
    await newData.save()
    return res.send(await BrandName.find())
  } catch (err) {
    console.log(err)
  }
})

app.get('/brand', async (req, res) => {
  try {
    const allData = await BrandName.find()
    return res.json(allData)
  } catch (err) {
    console.log(err)
  }
})
app.get('/brand/:id', async (req, res) => {
  try {
    const allData = await BrandName.findById(req.params.id)
    return res.json(allData)
  } catch (err) {
    console.log(err)
  }
})
app.put('/brand/:id', async (req, res) => {
  const {brandname} = req.body
  try {
    const newData = new BrandName({brandname})
    const allData = await BrandName.findById(req.params.id)
    return res.json(await BrandName.find())
  } catch (err) {
    console.log(err)
  }
})
app.delete('/brand/:id', async (req, res) => {
  try {
    const allData = await BrandName.findById(req.params.id)
    return res.json(await BrandName.find())
  } catch (err) {
    console.log(err)
  }
})
app.listen(3000, () => console.log('server running...'))
