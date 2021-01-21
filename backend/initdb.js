require('dotenv-defaults').config()

const csvtojson = require("csvtojson")
const mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')
const Course = require('./models/course')
const CourseInfo = require('./models/course_info')
const { exit } = require('process')



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
  // console.log('MongoDB connected!');
  // // INSERT COURSE
  // console.log('delete all data!')
  // Course.deleteMany({}, () => { })
  // // Loop through all the files in the temp directory
  // let dir = __dirname + "/models/test_data/course";
  // fs.readdir(dir, function (err, files) {
  //   if (err) {
  //     console.error("Could not list the directory.", err);
  //     process.exit(1);
  //   }
  //   files.forEach(function (file, index) {
  //     // Make one pass and make the file complete
  //     var Path = path.join(dir, file);
  //     if (file.includes(".csv")){
  //       console.log(`insert ${file}...`)
  //       csvtojson()
  //       .fromFile(Path)
  //       .then(csvData => {        
  //         Course.insertMany(csvData, (err, res) => {
  //           if (err) throw err;
  //           console.log(`Inserted: ${res.length} rows`);
  //         });
  //       });
  //     }
  //   });
  // });

  //max on opened files: https://github.com/meteor/meteor/issues/8057
  //INSERT COURSE INFO
  // console.log('delete all data!')
  // CourseInfo.deleteMany({}, () => { })
  // let dir = __dirname + "/models/test_data/course_info";
  // fs.readdir(dir, function (err, files) {
  //   if (err) {
  //     console.error("Could not list the directory.", err);
  //     process.exit(1);
  //   }
  //   files.forEach(function (file, index) {
  //     // Make one pass and make the file complete
  //     var Path = path.join(dir, file);
  //     if (file.includes(".csv")){
  //       // console.log(`insert ${file}...`)
  //       csvtojson()
  //       .fromFile(Path)
  //       .then(csvData => {        
  //         CourseInfo.insertMany(csvData, (err, res) => {
  //           try{
  //             if (err) throw err;
  //             // console.log(`Inserted: ${res.length} rows`);
  //           }catch(err){
  //             console.log(`${file} has error`)
  //           }
  //         });
  //       });
  //     }
  //   });
  // });
  var ops = [];
  Course.find({ },  (err, res)=>{
    res.forEach(async doc => {
      var tag = doc.tag.split(' ');
      doc.Tags = tag;
      await doc.save();
      // ops.push({
      //   "updateOne": {
      //     "filter": { "_id": doc._id },
      //     "update": { "$set": { "tag": tag } }
      //   }
      // });
  
    //   if ( ops.length >= 1000 ) {
    //     Course.bulkWrite(ops);
    //     ops = [];
    //   }             
    });
  
    // if ( ops.length > 0 ) {
    //   Course.bulkWrite(ops);
    //   ops = [];
    // }
  });
})


