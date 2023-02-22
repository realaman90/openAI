import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    chatId:String,
    name: String,
    messages: [
        {
            content : {
            type: String,
            required: true,

        },
        sender: {
            type: String,
            required: true,
        },
        timestamp: {
            type: String,
            required: true,
        },
        received: {
            type: Boolean,
            required: true,
        },
    }

    ],
    timestamp: String,
    received: Boolean,
});
