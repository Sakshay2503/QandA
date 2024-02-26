const mongoose=require("mongoose")



// Question Schema
const QuestionSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: { type: Date, default: Date.now },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
  });

  const Question=mongoose.model("Question",QuestionSchema);

  module.exports=Question;