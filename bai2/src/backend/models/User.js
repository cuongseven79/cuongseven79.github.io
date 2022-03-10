const mongoose = require("mongoose");

// Schema dùng để chứa những props ( khung xương )
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,   // phải nhập Username
        minlength: 6,    //Tối thiểu 6 kí tự
        maxlength: 20,   // tối đa 20 kí tự
        unique: true     // Khi User khác tạo username giống vậy nữa sẽ bị lỗi.
    },
    email: {
        type: String,
        require: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    admin: {
        type: Boolean,   // cho biết có phải là admin không ??
        default: false, //  bất kỳ user đăng nhập vào đều không phải là admin
    },

}, { timestamps: true });  // Cho biết thời gian được tạo và được update khi nào!

module.exports = mongoose.model("User", userSchema); //Đặt tên là User và tên userShema vừa được tạo ở trên.
