const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const CourseInfo = new Schema({
	CouCont: {
		type: String,
	},
	CouGoal: {
		type: String,
	},
	CouReq: {
		type: String,
	},
	OfficeHour: {
		type: Number,
	},
	RefBook: {
		type: Number,
	},
	CouEval: {
		type: Number,
	},
	CouProg: {
		type: String,
	}
},
    {
        versionKey: false
	}
)

// Exporting table for querying and mutating
module.exports = CourseInfo
