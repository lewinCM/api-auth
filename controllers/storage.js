const createStotage = (req, res) => {
  res.json({ ok: true, msg: 'todos los createStotages' })
}
const allStotages = (req, res) => {
  res.json({ ok: true, msg: 'todos los StotagesById' })
}
const StotagesById = (req, res) => {
  res.json({ ok: true, msg: 'todos los Stotagees' })
}
const updateStotage = (req, res) => {
  res.json({ ok: true, msg: 'todos los updateStotages' })
}

const deleteStotage = (req, res) => {
  res.json({ ok: true, msg: 'todos los deleteStotages' })
}
module.exports = { allStotages, StotagesById, updateStotage, deleteStotage, createStotage }