
const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");
const router = require("express").Router();

// GET ALL USERS
router.get("/", middlewareController.verifyToken, userController.getAllUsers);  //middlewareController vào để verify trước kh

//DELETE USERS 
router.delete("/:id", middlewareController.verifyTokenAndAdminAuthe, userController.deleteUser);

module.exports = router;
