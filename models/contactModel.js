const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  subject: String,
  message: {type:String,required:true},
});

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;
