const Router = require("express")
const router = new Router
const NoteController = require("../controllers/noteController");
const AuthMiddleware = require("../middlewares/authMiddleware")
const { body, param } = require("express-validator");

//  http://localhost:5000/notes/create
router.post("/create", 
    body("title").exists(),
    body("text").exists(),
    AuthMiddleware, 
    NoteController.createNote)

//  http://localhost:5000/notes/viewNotes
router.get("/viewNotes",AuthMiddleware, NoteController.viewNotes)

//  http://localhost:5000/notes/viewNoteById/:noteId
router.get("/viewNoteById/:noteId",AuthMiddleware, NoteController.viewNotes)

//  http://localhost:5000/notes/updateNote/:noteId
router.post("/updateNote/:noteId",
    param("noteId").exists(),
    body("title").exists(),
    body("text").exists(),
    AuthMiddleware, 
    NoteController.updateNote)

//  http://localhost:5000/notes/deleteNote/:noteId
router.delete("/deleteNote/:noteId",
    param("noteId").exists(),
    AuthMiddleware, 
    NoteController.deleteNote)

module.exports = router