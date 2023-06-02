const axios = require("axios");
const config = require("../config/config");
const Contact = require("../models/contactModel")

const home = (req, res) => {
  res.render("index");
};

const about = (req, res) => {
  res.render("about");
};

const contact = (req, res) => {
  res.render("contact");
};

const storeContact = async (req, res, next) => {
  try {
    const contact = new Contact({...req.body});
    const createContact = await contact.save();

    // Temporary status data
    const temporaryStatus = "Contact saved successfully!";

    // Render back to the contact page with temporary status
    return res.render("contact", { status: temporaryStatus });
  } catch (error) {
    console.log(error)
    return res.render("contact", { error: "failed to save contact" });
  }
};
const form = (req, res) => {
  res.render("form");
};
const gallery = (req, res) => {
  res.render("gallery");
};
const service = (req, res) => {
  res.render("service");
};

module.exports = {
  home,
  about,
  contact,
  storeContact,
  form,
  gallery,
  service,
};
