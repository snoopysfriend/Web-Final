const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const CourseInfoSchema = new Schema({
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
