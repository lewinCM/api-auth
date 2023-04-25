const { Schema, model } = require("mongoose");
const ContactShema = Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  desc: { type: String, required: true },

})
ContactShema.method('toJSON', function () {
  const { __v, _id, password, ...object } = this.toObject()

  object.uid = _id
  return object;
})
module.exports = model("Contact", ContactShema)


