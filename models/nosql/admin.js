const { Schema, model } = require("mongoose");

const AdminShema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  img: { type: String, },
  role: { type: String, required: true, default: 'tutor_ROLE' },
  google: { type: Boolean, default: false },
  // implementando releacion
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tutores: {
    type: Schema.Types.ObjectId,
    ref: 'Tutore'
  }



})
AdminShema.method('toJSON', function () {
  const { __v, _id, password, ...object } = this.toObject()

  object.uid = _id
  return object;
})
module.exports = model("admin", AdminShema)


