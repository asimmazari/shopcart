var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type:String, required: true},
	imagePath2: {type:String,required: true},
	title:{type:String, required: true},
	price: {type:Number,required: true},
	category: {type:String,required: true},
	piece: {type:Number,required: true},
	material: {type:String,required: true},
	design: {type:String,required: true},
	size: {type:String,required: true},
	color: {type:String,required: true}
});
schema
.virtual('url')
.get(function(){
	return '/home/woman_unstitched_lawn_vol_1' + this._id;
});
module.exports = mongoose.model('woman_unstitched_lawn_vol_1',schema);