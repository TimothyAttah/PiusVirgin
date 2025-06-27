import express from "express";
import noteControllers from "../controllers/notesControllers.js";
import auth from '../middlewares/auth.js'

const noteRouter = express.Router();

noteRouter.post('/create', auth, noteControllers.createNote);
noteRouter.get('/', noteControllers.getAllNotes);
noteRouter.get('/my-notes', auth, noteControllers.getMyNote);
noteRouter.delete('/delete/:noteId', auth, noteControllers.deleteNote);
noteRouter.put('/edit/:noteId', auth, noteControllers.editNote);


export default noteRouter;
