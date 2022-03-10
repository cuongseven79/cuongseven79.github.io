const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();        // Cần phải gọi lại mới sử dụng được . để che URL. 
const app = express();

/* - Kết nối với MongooDB thông qua URL đã bị hashed
   - Sử dùng .env để che url lại. 
   - Nếu không bất kỳ ai có được Url này đều có thể vào xem được database của bạn. */
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MONGOOSE DB");
});
// Dùng để ngăn chăn Cross-origin Errors.   
app.use(cors());

// để tạo & gắn cookie  
app.use(cookieParser());

// chuyển req, res thành file dạng json
app.use(express.json());

//ROUTES 
app.use("/v1/auth", authRouter);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log("Server is running");
});


