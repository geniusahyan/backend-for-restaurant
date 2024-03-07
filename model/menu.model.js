import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    name:{
        type: String,
    },
    recipe:{
        type: String,
    },
    image:{
        type: String,
    },
    category:{
        type: String,
    },
    price:{
        type: Number,
    }
})

const menudata = mongoose.model('menudata', menuSchema, 'menudata');
export default menudata;