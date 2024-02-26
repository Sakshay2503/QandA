const mongoose=require("mongoose")



// Question Schema
const QuestionSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    } ,
    body: {
        type:String,
        require:true,
    },
    createdAt: { 
        type: Date, default: Date.now 
    },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
  });

  module.exports=QuestionSchema;