const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const AnswerSchema = new Schema({
	QuId: {
		type: ObjectId,
		required: [true, 'QuId field is required.']
	},
	AnsCont: {
		type: String,
	},
	StudId: {
		type: String,
		required: [true, 'StudId field is required.']
	},
	TimStp: {
        type: Date,
        default: Date.now,
	}
},
    {
        versionKey: false
	}
)

// Creating a table within database with the defined schema
const Answer = mongoose.model('answer', AnswerSchema)

// Exporting table for querying and mutating
module.exports = Answer
