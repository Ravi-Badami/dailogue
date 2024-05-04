import mongoose from 'mongoose';

const messagesSchema = mongoose.Schema({
  conversationId: { type: String },
  senderId: { type: String },
  message: { type: String },
});

const Messages = mongoose.model('Message', messagesSchema);
export default Messages;
