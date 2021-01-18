const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const AnswerSchema = new Schema({
	QuId: {
        type: mongoose.Schema.Types.Object, ref: "Question",
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

// Exporting table for querying and mutating
const Answer = mongoose.model('answer', AnswerSchema)

module.exports = Answer
