const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const { Name, Email, PhoneNumber, Message } = req.body;
    if (!Name || !Email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required.",
      });
    }
    const contact = await Contact.create({
      Name,
      Email,
      PhoneNumber: PhoneNumber || "",
      Message: Message || "",
    });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteMail = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found." });
    }
    res.status(200).json({ success: true, message: "Contact deleted." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  deleteMail,
};
