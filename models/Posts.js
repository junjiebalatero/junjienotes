const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	name: {
		type: String,
		required: true
	},
	app: {
		type: String,
		required: true
	},
	username_or_email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Posts', PostSchema);