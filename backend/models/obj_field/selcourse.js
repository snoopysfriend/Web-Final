const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const SelCourse = new Schema({
	CourseId: {
		type: String,
		required: [true, 'CourseId field is required.']
	},
	StudId: {
        type: String,
        required: [true, 'StudId field is required.']
	},
	TimStp: {
        type: Date,
        default: Date.now,
    },
},
    {
        versionKey: false
    }
)

// Exporting table for querying and mutating
module.exports = SelCourse
