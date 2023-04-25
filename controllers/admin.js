const createAdmin = (req, res) => {
  res.json({ ok: true, msg: 'todos los createAdmin' })
}

const updateAdmin = (req, res) => {
  res.json({ ok: true, msg: 'todos los updateAdmin' })
}
const deleteAdmin = (req, res) => {
  res.json({ ok: true, msg: 'todos los deleteAdmin' })
}
module.exports = { createAdmin, updateAdmin, deleteAdmin }