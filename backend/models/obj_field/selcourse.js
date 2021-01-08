const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const SelCourseSchema = new Schema({
	CourseId: [{
        type: String,
        required: [true, 'StudId field is required.']
    }],
    daytime: [{
       type: Array,
    }],
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

const SelCourse = mongoose.model('selCourse', SelCourseSchema)
// Exporting table for querying and mutating
module.exports = SelCourse
