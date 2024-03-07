import mongoose from 'mongoose';

const contactScheme = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{ timestamps: true });

const contact = mongoose.model('contact', contactScheme);
export default contact;