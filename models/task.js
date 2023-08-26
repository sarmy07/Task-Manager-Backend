const mongoose = require('mongoose');

const schema = mongoose.Schema;

const taskSchema = new schema({
    title: {
        type: String,
        required: [true, 'title field is required'],
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    tag: {
        type: String,
        required: [true, 'tag is required']
    }
});

module.exports = mongoose.model('task', taskSchema);
