const Note = require("../models/Note");
const ApiStatus = require("../handlers/apiStatus")

class NoteService {

    async createNote(userId, title, text) {
        const newNote = await Note.create({userId:userId,title,text,});
        return newNote;
    }

    async viewNotes(userId) {
        const notes = await Note.findAll({where:{userId:userId}});
        if (!notes) {
            throw ApiStatus.badRequest("Заметки не были найдены");
        }
        return notes
    }

    async viewNoteById(userId, noteId) {
        const note = await Note.findByPk(noteId);
        if((!note)||(note.userId != userId)) {
            throw ApiStatus.badRequest("Заметки не были найдены");
        }
        return note
    }

    async updateNote(userId, noteId, title, text) {
        const note = await Note.findByPk(noteId);
        if((!note)||(note.userId != userId)) {
            throw ApiStatus.badRequest("Заметка не была найдены");
        }
        note.title = title;
        note.text = text;
        await note.save();
        return note
    }

    async deleteNote(userId, noteId) {
        const note = await Note.findByPk(noteId);
        if((!note)||(note.userId != userId)) {
            throw ApiStatus.badRequest("Заметка не была найдены");
        }
        await Note.destroy({ where: { id: noteId } });
        return null
    }
}


module.exports = new NoteService();