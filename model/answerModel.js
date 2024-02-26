const mongoose=require("mongoose")

// Answer Schema

const AnswerSchema = new mongoose.Schema({
    body: String,
    createdAt: { type: Date, default: Date.now },
    // question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
  });
  const Answer=mongoose.model("Answer",AnswerSchema);

  module.exports=Answer