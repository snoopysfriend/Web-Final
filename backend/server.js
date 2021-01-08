import express from 'express'
import cors from 'cors'
import path from 'path'
import session from 'express-session'
import mongoose from 'mongoose'
var bodyParser = require('body-parser')
//import routes from './routes'
import userRoutes from './routes/user'
import syllabusRoutes from './routes/syllabus'
import coursInformRoutes from './routes/courseInform'
import scheduleRoutes from './routes/schedule'

require('dotenv').config()
const app = express()
const identityKey = 'skey';
//var FileStore = require('session-file-store')(session)
// init middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    name: identityKey,
    secret: '123',
    //store: new FileStore(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 1000
    }
}))
//app.use(express.json())
/*
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})*/

//app.use(app.router);


const port = process.env.PORT || 4000

// TODO connect the DB
//
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //TODO the options
})

const db = mongoose.connection

db.on('error', (error) => {
    console.error(error)
})

db.once('open', () => {
    console.log('DB connected!')
    //routes(app)
    app.use('/api/users', userRoutes)
    app.use('/api/schedule', scheduleRoutes)
    app.use('/api/syllabus', syllabusRoutes)
    app.use('/api/courseInform', coursInformRoutes)
    //app.use('/session', )
    // start listening
    app.listen(port, () => {
        console.log(`Server is up on port ${port}.`)
    })
})

