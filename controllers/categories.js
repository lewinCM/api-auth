const createcategory = (req, res) => {
  res.json({ ok: true, msg: 'createcategory correctamente' })
}

const allcategory = (req, res) => {
  res.json({ ok: true, msg: 'allcategory correctamente' })
}
const categoryById = (req, res) => {
  res.json({ ok: true, msg: 'categoryById correctamente' })
}
const updatecategory = (req, res) => {
  res.json({ ok: true, msg: 'updatecategory correctamente' })
}

const deletecategory = (req, res) => {
  res.json({ ok: true, msg: 'deletecategory correctamente' })
}



module.exports = { createcategory, allcategory, deletecategory, updatecategory, categoryById }