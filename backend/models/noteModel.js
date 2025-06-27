import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, {timestamps: true});

const notes = mongoose.model('Notes', NoteSchema)

export default notes;
