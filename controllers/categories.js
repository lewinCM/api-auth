const createBlog = (req, res) => {
  res.json({ ok: true, msg: 'createBlog correctamente' })
}

const allBlog = (req, res) => {
  res.json({ ok: true, msg: 'allBlog correctamente' })
}
const BlogById = (req, res) => {
  res.json({ ok: true, msg: 'BlogById correctamente' })
}
const updateBlog = (req, res) => {
  res.json({ ok: true, msg: 'updateBlog correctamente' })
}

const deleteBlog = (req, res) => {
  res.json({ ok: true, msg: 'deleteBlog correctamente' })
}



module.exports = { createBlog, allBlog, deleteBlog, updateBlog, BlogById }