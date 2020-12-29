require('dotenv-defaults').config()

const csvtojson = require("csvtojson")
const mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')
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


db.once('open', () => {
  console.log('MongoDB connected!');
  console.log('delete all data!')
  Course.deleteMany({}, () => { })
  // Loop through all the files in the temp directory
  const dir = __dirname + "/models/test_data/";
  fs.readdir(dir, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
    files.forEach(function (file, index) {
      // Make one pass and make the file complete
      var Path = path.join(dir, file);
      if (file.includes(".csv")){
        console.log(`insert ${file}...`)
        csvtojson()
        .fromFile(Path)
        .then(csvData => {        
          Course.insertMany(csvData, (err, res) => {
            if (err) throw err;
            console.log(`Inserted: ${res.length} rows`);
          });
        });
      }
    });
  });
});