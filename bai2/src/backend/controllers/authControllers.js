const User = require("../models/User");
const bcrypt = require("bcrypt"); //ĐỂ HASHED PASSWORD trên dataBase
const jwt = require("jsonwebtoken");

const authController = {
    //REGISTER
    registerUser: async (req, res) => {

        try {
            // Che(hashed) password 
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // Create new User
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            // Save to dataBase
            const user = await newUser.save();
            return res.status(200).json(user); // status 200 == thành công

        } catch (error) {
            return res.status(500).json(error); // status 500 == Lỗi
        }
    },

    //GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
            process.env.JWT_ACCESS_KEY,    //hide secretKey 
            { expiresIn: "30s" }            // hết hạn code token trong 30s
        );
    },
    //GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
            process.env.JWT_ACCESS_KEY,    //hide secretKey 
            { expiresIn: "30s" }            // hết hạn code token trong 30s
        );
    },

    //LOGIN 
    loginUser: async (req, res) => {
        try {
            // Tìm User này đã có trong dataBase chưa?
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("Wrong username!");
            }

            // So sánh Password của User nhập với password được lưu trên database CÓ giống nhau không?
            const validPassword = await bcrypt.compare(
                req.body.password, // password user Nhập 
                user.password    // password trên database
            );
            if (!validPassword) {
                return res.status(404).json("Wrong Password");
            }
            if (user && validPassword) {
                // ACCESS TOKEN 
                const accessToken = authController.generateAccessToken(user);

                //REFRESH TOKEN
                const refreshToken = authController.generateRefreshToken(user);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",

                })


                const { password, ...others } = user._doc;       // bỏ password ra khi jwt trả về
                res.status(200).json({ ...others, accessToken, refreshToken });
            };
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};
module.exports = authController;