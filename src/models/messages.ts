import mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
  from: string;
  to: string;
  message: string;
  createdAt: Date;
}


const messageSchema: mongoose.Schema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model<IMessage>("messages", messageSchema);

export default Message;
