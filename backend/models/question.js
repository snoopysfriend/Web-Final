const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const QuestionSchema = new Schema({
	QuCont: {
		type: String,
	},
	StudId: {
		type: String,
		required: [true, 'StudId field is required.']
	},
	CourseId: {
		type: String,
		required: [true, 'CourseId field is required.']
	},
	TimStp: {
        type: Date,
        default: Date.now,
	},
    Answer: [{ 
        answer: String,
        rates: [{
            studentId: String,
            rate: Boolean
        }]
    }]
},
    {
        versionKey: false
    }
)

// Creating a table within database with the defined schema
const Question = mongoose.model('question', QuestionSchema)

// Exporting table for querying and mutating
module.exports = Question
