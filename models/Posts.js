const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	ravencoin_asset_name: {
		type: String,
		required: true
	},
	total_circulating_supply: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	for_sale: {
		type: String,
		required: true
	},
	contact_address: {
		type: String,
		required: true
	},
	contact_email: {
		type: String,
		required: true
	},
	contact_cellphone: {
		type: String,
		required: true
	},
	contact_phone: {
		type: String,
		required: true
	},
	nick_name: {
		type: String,
		required: true
	},
	issuer: {
		type: String,
		required: true
	},
	website_url: {
		type: String,
		required: true
	},
	IPFS_attachment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Posts', PostSchema);
