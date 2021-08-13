const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
    name: { type: String, required:true },
    ano: { type: String, required:true },
    desc: { type: String, required:true },
    imagePath: { type:String,   default: 'placeholder.jpg',},
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Card', CardSchema);