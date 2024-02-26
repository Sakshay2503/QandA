const asyncHandler = require("express-async-handler");

const Answer=require("../model/answerModel");



  // Post Answer
const postAnswer = asyncHandler(async (req, res) => {
    const { questionId } = req.params;
    const { body } = req.body;
    try {
        const answer = new Answer({ body, question: questionId });
        await answer.save();
        const question = await Question.findByIdAndUpdate(
            questionId,
            { $push: { answers: answer._id } },
            { new: true }
        ).populate('answers');
        res.json(question);
    } catch (error) {
        res.status(500).json({ 
          message:"Error",
          error: error.message });
    }
});

  module.exports={
    postAnswer,

  }