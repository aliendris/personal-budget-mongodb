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
        min: 6,
        required: true,
        unique: true,
        validate: [hexColorValidation, 'color is not a Hex Color']
        
    }
    
}, {collection: 'myBudget'})
// Reference https://ksloan.net/tips-for-using-mongoose-schemas-with-express-mongo-express-node-stack/
function hexColorValidation(s) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(s)
}

module.exports = mongoose.model('myBudget', budget_schema);