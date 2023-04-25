const createPost = (req, res) => {
  res.json({ ok: true, msg: 'createPost correctamente' })
}

const allPost = (req, res) => {
  res.json({ ok: true, msg: 'allPost correctamente' })
}
const PostById = (req, res) => {
  res.json({ ok: true, msg: 'PostById correctamente' })
}
const updatePost = (req, res) => {
  res.json({ ok: true, msg: 'updatePost correctamente' })
}

const deletePost = (req, res) => {
  res.json({ ok: true, msg: 'deletePost correctamente' })
}



module.exports = { createPost, allPost, deletePost, updatePost, PostById }