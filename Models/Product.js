const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    updated_at:{type:Date, default:Date.now}

})

module.exports =mongoose.model('Product',ProductSchema);