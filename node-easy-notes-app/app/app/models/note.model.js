const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    //adding a timestamps option to the schema
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);