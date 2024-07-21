const mongoose = require("mongoose");
const todoschema = new mongoose.Schema(
    {
        title:
        {
            type:String,
            required: true,
            maxlength:50,
        },
        description:
        {
            type:String,
            required: true,
            maxlength:50,
        },
        createdAt:
        {
            type:Date,
            required: true,
            default: Date.now(),
            //maxlength:50,
        },
        updatedAt:
        {
            type:Date,
            required: true,
            default: Date.now(),
        }
    }
);
module.exports = mongoose.model("Todo", todoschema);