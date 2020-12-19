require('dotenv-defaults').config()

const csvtojson = require("csvtojson");
const mongoose = require('mongoose')

const Course = require('./models/course')


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

csvtojson()
  .fromFile(__dirname + "/models/test_data/test.csv")
  .then(csvData => {
    db.once('open', () => {
      console.log('MongoDB connected!')
      Course.deleteMany({}, () => { })
      console.log('Course Model')
      Course.insertMany(csvData, (err, res) => {
        if (err) throw err;

        console.log(`Inserted: ${res.insertedCount} rows`);
      });
    })
  });