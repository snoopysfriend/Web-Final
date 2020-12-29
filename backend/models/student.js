const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SelCourse = require('./obj_field/selcourse')

// Creating a schema, sort of like working with an ORM
const StudentSchema = new Schema({
	StudId: {
        type: String,
        unique: [true, 'StudId field must be unique.'],
        required: [true, 'StudId field is required.']
	},
	StudCname: {
		type: String,
		required: [true, 'StudCname field is required.']
    },
    StudEname: {
		type: String,
		required: [true, 'StudEname field is required.']
    },
    StudDept: {
		type: String,
		required: [true, 'StudDept field is required.']
    },
    StudMaj: {
		type: String,
		required: [true, 'StudMaj field is required.']
    },
    StudGrad: {
		type: Number,
		required: [true, 'StudGrad field is required.']
    },
    StudGend: {
		type: Number,
		required: [true, 'StudGend field is required.']
    },
    TimStp: {
        type: Date,
        default: Date.now,
    },
    SelCourses: {
      type:[SelCourse],
      default: []
    }
},
    {
        versionKey: false
    }
)

// Creating a table within database with the defined schema
const Student = mongoose.model('student', StudentSchema)

// Exporting table for querying and mutating
module.exports = Student
