import Notes from '../models/noteModel.js';

const noteControllers = {
  createNote: async (req, res) => {
    try {
      const { title, tag, content } = req.body;

      if (!title || !tag || !content)
        return res.status(400).json({ msg: 'Please fill in all fields.' });

      const notes = await Notes({
        title,
        tag,
        content,
        postedBy: req.user,
      }).populate('postedBy', '-password');

      await notes.save();

      return res
        .status(201)
        .json({ msg: 'Note created successfully.', data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllNotes: async (req, res) => {
    try {
      const notes = await Notes.find()
        .sort({ createdAt: -1 })
        .populate('postedBy', '-password');
      return res.status(200).json({ msg: 'All Notes', data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getMyNote: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  editNote: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default noteControllers;
