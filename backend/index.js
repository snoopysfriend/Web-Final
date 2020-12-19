require('dotenv-defaults').config()

const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const Student = require('./models/student')
const { exception } = require('console')

const app = express()
const server = http.createServer(app)

if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (error) => {
  console.error(error)
})

db.once('open', () => {
  console.log('MongoDB connected!')

  // Student.deleteMany({}, () => { })

  console.log('testing Student Model')
  Student.create(payload, function(err, res) {
    if (err) throw err;
    console.log(res)
    console.log("Student Model passed!");
  });
  
  const PORT = process.env.port || 4000
  server.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`)
  })
})