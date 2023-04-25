const sendEmail = (req, res) => {
  res.json({ ok: true, msg: 'Mensaje enviado correctamente' })
}

module.exports = { sendEmail }