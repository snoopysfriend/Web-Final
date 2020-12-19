const mongoose = require('mongoose')
const Schema = mongoose.Schema

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@(ntu.edu.tw)/;
    return re.test(email)
};

// Creating a schema, sort of like working with an ORM
const AccountSchema = new Schema({
	UserNam: {
		type: String,
		required: [true, 'UserNam field is required.']
	},
	StudEmail: {
		type: String,
        required: [true, 'StudEmail field is required.'],
        validate: [validateEmail, 'Please fill a valid NTU email address']
    },
    StudPwd: {
		type: String,
		required: [true, 'StudPwd field is required.']
    },
    StudId: {
        type: String,
		unique: [true, 'StudId field must be unique.'],
        required: [true, 'StudId field is required.']
    },
},
    {
        versionKey: false
    }
)

// Creating a table within database with the defined schema
const Account = mongoose.model('account', AccountSchema)

// Exporting table for querying and mutating
module.exports = Account
