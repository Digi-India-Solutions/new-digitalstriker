const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, default: "" },
    Message: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
