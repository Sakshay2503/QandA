const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
 
} = require("../controller/userController");

const { 
    getQuestion,
    postQuestion,
   }=require("../controller/questionController");

const { postAnswer,}=require("../controller/answerController")

const { protect } = require("../middleware/userMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/profile", protect, updateUserProfile);
router.post('/questions',postQuestion );
router.get('/questions',getQuestion );
router.post('/questions/:questionId/answers',postAnswer );
module.exports = router;