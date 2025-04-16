

//update user carData  : /api/user/update

import User from "../models/User.js";

export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body; //userId is getting by userAuth
        await User.findByIdAndUpdate(userId, {cartItems})
        res.json({ success: true , message: "Cart Updated" });

    } catch (error) {

        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}