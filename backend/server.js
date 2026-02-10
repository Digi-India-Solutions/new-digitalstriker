const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const productRoutes = require('./routers/route')
const cors = require('cors')

dotenv.config()
const PORT = process.env.PORT || 23000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // ✅ fixed typo

// optional health check route
app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api', productRoutes)

// connect to DB then start server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log('server run on', PORT)
  })
})