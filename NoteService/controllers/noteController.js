const ApiStatus = require("../handlers/apiStatus");
const NoteService = require("../services/noteService");
const TokenService = require("../services/tokenService");
const { validationResult } = require("express-validator");

class NoteController {

    //  http://localhost:5000/notes/createNote
    async createNote(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Ошибка при валидации"));
            }
            const accessToken = req.cookies.accessToken;
            const { title, text } = req.body;
            const userData = TokenService.validateAcessToken(accessToken)
            const newNote = await NoteService.createNote(userData.id, title, text);
            return res.json(newNote);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/viewNotes
    async viewNotes(req, res, next) {
        try {
            const accessToken = req.cookies.accessToken;
            const userData = TokenService.validateAcessToken(accessToken)
            const notes = await NoteService.viewNotes(userData.id);
            return res.json(notes);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/viewNoteById/:noteId
    async viewNoteById(req, res, next) {
        try {
            const accessToken = req.cookies.accessToken;
            const noteId = req.params.noteId;
            const userData = TokenService.validateAcessToken(accessToken)
            const note = await NoteService.viewNoteById(userData.id, noteId);
            return res.json(note);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/updateNote/:noteId
    async updateNote(req, res, next) {
        try {
            const accessToken = req.cookies.accessToken;
            const noteId = req.params.noteId;
            const { title, text } = req.body;
            const userData = TokenService.validateAcessToken(accessToken)
            await NoteService.updateNote(userData.id, noteId, title, text);
            return next(ApiStatus.accepted("Заметка обновлена"));
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/deleteNote/:noteId
    async deleteNote(req, res, next) {
        try {
            const accessToken = req.cookies.accessToken;
            const noteId = req.params.noteId;
            const userData = TokenService.validateAcessToken(accessToken)
            await NoteService.deleteNote(userData.id, noteId);
            return next(ApiStatus.accepted("Заметка удалена"));
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new NoteController();