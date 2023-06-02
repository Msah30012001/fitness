const mongoose = require("mongoose");
const validator = require("validator");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
    phone: String,
  message: {type:String,required:true},
});

const Member = new mongoose.model("Member", memberSchema);

module.exports = Member;
