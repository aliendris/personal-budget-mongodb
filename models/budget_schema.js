const mongoose = require("mongoose");
const budget_schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    value: {
        type: Number,
        required: true,
        unique: true
    },
    color: {
        type: String,
        trim: true,
        minLength: 6,
        maxLength: 7,
        required: true,
        unique: true
        
    }
}, {collection: 'myBudget'})

module.exports = mongoose.model('myBudget', budget_schema);