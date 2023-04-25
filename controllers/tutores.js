const createTutor = (req, res) => {
  res.json({ ok: true, msg: 'todos los createTutors' })
}
const allTutors = (req, res) => {
  res.json({ ok: true, msg: 'todos los TutorsById' })
}
const TutorsById = (req, res) => {
  res.json({ ok: true, msg: 'todos los tutores' })
}
const updateTutors = (req, res) => {
  res.json({ ok: true, msg: 'todos los updateTutors' })
}

const deleteTutors = (req, res) => {
  res.json({ ok: true, msg: 'todos los deleteTutors' })
}
module.exports = { allTutors, TutorsById, updateTutors, deleteTutors,createTutor }