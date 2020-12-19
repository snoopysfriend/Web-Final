const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const AnsrateSchema = new Schema({
	AnsId: {
		type: ObjectId,
		required: [true, 'AnsId field is required.']
	},
	Rate: {
		type: Number,
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

// Creating a table within database with the defined schema
const Ansrate = mongoose.model('ansrate', AnsrateSchema)

// Exporting table for querying and mutating
module.exports = Ansrate
