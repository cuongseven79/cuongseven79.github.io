
// const { findById } = require("../models/User");
const User = require("../models/User");

const userController = {

    //GET ALL USERS 
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //DELETE USER
    deleteUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json("Delete Successfully");
        } catch (error) {
            return res.status(500).json(error);
        }
    },

}
module.exports = userController;
