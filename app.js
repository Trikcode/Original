require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const sendMessage = require('./controller/message')
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.json())

app.use(express.static('./content'))
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//   res.send('Home page')
// })
app.post('/message', sendMessage)

// app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000
const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log('server @ 5000...')
    })
  } catch (error) {
    console.log(error)
  }
}
start()
