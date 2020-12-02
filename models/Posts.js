const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	song_number: {
		type: Number,
		required: true
	},
	song_title: {
		type: String,
		required: true
	},
	song_artist: {
		type: String,
		required: true
	},
	song_category: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Posts', PostSchema);
