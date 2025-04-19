import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cartItems: {type: Object, default: {}},
}, { minimize: false })

const User = mongoose.models.user || mongoose.model('user', userSchema)
//if usermodel is available then it will user else it is created

export default User         