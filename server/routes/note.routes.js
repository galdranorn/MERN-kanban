import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// add new note
router.route('/notes').post(NoteController.addNote);

// delete note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// edit note
router.route('/notes').put(NoteController.editNoteContent);

export default router;
