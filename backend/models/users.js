const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const users = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'city is required'],
        trim: true
    },
    states: {
        type: String,
        required: [true, 'State is required'],
        trim: true
    },
    country: {
        type: String,
        required: [true, 'country is required'],
        trim: true
    },
    department: {
        type: String,
        required: [true, 'department is required'],
        trim: true
    },
    gender:{
        type: String,
        required: [true, 'Gender is required'],
        trim: true
    }
});

module.exports = mongoose.model('User', users);