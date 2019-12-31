const router = require('express').Router();
const Note = require('../models/Note.js');
const auth=require('../middleware/auth.js');

router.get('/view',auth, async (req, res) => {
  const id = req.userId;
  const notes = await Note.find({userId:id}).lean();
  res.send(notes);
})

router.post('/new',auth, async (req, res) => {
  const {title, body} = req.body;
  const note = new Note({title: title, body: body,userId:req.userId});
  await note.save();
  res.send(note);
})

router.post('/delete', async (req, res) => {
  const id = req.body.id;
  const note = await Note.findById(id).lean();
  console.log(note);
  const err = await Note.findByIdAndDelete(id);
  console.log(err);
  if (!err) return res.status(400).send('Note not found');
  return res.send(note);
})

module.exports = router;
