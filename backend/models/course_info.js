const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const CourseInfoSchema = new Schema({
	CourseId:{
		type: String,
		default:''
	},
	CouCname:{
		type: String,
		default:''
	},
	Year:{
		type: String,
		default:''
	},
	DptName:{
		type: String,
		default:''
	},
	TeaCname:{
		type: String,
		default:''
	},
	CouCode:{
		type: String,
		default:''
	},
	Class: {
		type: String,
		default:''
	},
	Cred: {
		type: Number
	},
	ForH: {
		type: String,
		default:''
	},
	SorM: {
		type: String,
		default:''
	},
	DayTime: {
		type: String,
		default:''
	},
	ClsRom: {
		type: String,
		default:''
	},
	Mark: {
		type: String,
		default:''
	},
	Skills: {
		type: String,
		default:''
	},
	CouCont: {
		type: String,
		default:''
	},
	CouGoal: {
		type: String,
		default:''
	},
	CouReq: {
		type: String,
		default:''
	},
	OfficeHour: {
		type: String,
		default:''
	},
	RefBook: {
		type: String,
		default:''
	},
	MustBook: {
		type: String,
		default:''
	},
	CouEval: {
		type: String,
		default:''
	},
	CouProg: {
		type: String,
		default:''
	}
},
    {
        versionKey: false
	}
)

const CourseInfo = mongoose.model('courseinfo', CourseInfoSchema)
// Exporting table for querying and mutating
module.exports = CourseInfo
