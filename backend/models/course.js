const mongoose = require('mongoose')
const courseinfo = require('./obj_field/course_info')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const CourseSchema = new Schema({
	CourseId: {
		type: String,
		required: [true, 'CourseId field is required.']
	},
	DptCode: {
		type: String,
	},
	DptName: {
		type: String,
	},
	CouCode: {
		type: String,
	},
	Cred: {
		type: Number,
	},
	ForH: {
		type: Number,
	},
	SelCode: {
		type: Number,
	},
	CouCname: {
		type: String,
	},
	TeaCname: {
		type: String,
	},
	ClsRom: {
		type: String,
	},
	MaxCap: {
		type: String,
	},
	Mark: {
		type: String,
	},
	CoSelect: {
		type: Number,
	},
	CourseInfo: courseinfo.CourseInfo
},
    {
        versionKey: false
	}
)

// Creating a table within database with the defined schema
const Course = mongoose.model('course', CourseSchema)

// Exporting table for querying and mutating
module.exports = Course
