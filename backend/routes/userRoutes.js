const express = require('express');
const router = express.Router();
const {authUser, registerUser, updateUser} = require("../controller/userController");
const { protect } = require('../middlewares/authMiddleware')

router.post("/signup", registerUser);
router.post("/login", authUser);

router.put("/update", protect, updateUser)



module.exports = router;