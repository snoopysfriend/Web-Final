import express from 'express'
import cors from 'cors'
import path from 'path'
import session from 'express-session'
import mongoose from 'mongoose'
//import routes from './routes'
import userRoutes from './routes/user'
import syllabusRoutes from './routes/syllabus'
import coursInformRoutes from './routes/courseInform'
import scheduleRoutes from './routes/schedule'
import questionRoutes from './routes/question'
import fullsearchRouter from './routes/fullsearch'
var bodyParser = require('body-parser')
//var RedisStore = require('connect-redis')(session);  

require('dotenv').config()
const app = express()
const identityKey = 'skey';
//var FileStore = require('session-file-store')(session)
// init middleware
const corsOptions = {
    origin: ['http://54.165.151.147:3000', 'http://54.165.151.147','http://localhost:3000','http://127.0.0.1:3000'],
    credentials: true,
}
//https://stackoverflow.com/questions/40025450/express-js-no-access-control-allow-origin-header-is-present-on-the-requested/40026625
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    name: identityKey,
    secret: '123',
    //store: new FileStore(),
    resave: false,
    saveUninitialized: false,
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

process.env.MONGO_URL="mongodb+srv://nicksome:mongodb@cluster0.k9h1m.mongodb.net/2020webprog_ntucousel?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true)

const db = mongoose.connection

db.on('error', (error) => {
    console.error(error)
})

db.once('open', () => {
    console.log('DB connected!!!')
    //routes(app)
    app.use('/api/users', userRoutes)
    app.use('/api/schedule', scheduleRoutes)
    app.use('/api/syllabus', syllabusRoutes)
    app.use('/api/courseInform', coursInformRoutes)
    app.use('/api/questions', questionRoutes)
    app.use('/api/fullsearch', fullsearchRouter)
    // start listening
    app.listen(port, () => {
        console.log(`Server is up on port ${port}.`)
    })
})
