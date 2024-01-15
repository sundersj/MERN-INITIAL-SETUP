import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: String,
    is_logged_in: Boolean,
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
