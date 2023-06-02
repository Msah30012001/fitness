const axios = require("axios");
const config = require("../config/config");
const Contact = require("../models/contactModel")
const Member = require("../models/memberModel");


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
const storeMember = async (req, res, next) => {
  try {
    const member = new Member({ ...req.body });
    const createMember = await member.save();

    // Temporary status data
    const temporaryStatus = "Member saved successfully!";

    // Render back to the Member page with temporary status
    return res.render("form", { status: temporaryStatus });
  } catch (error) {
    console.log(error);
    return res.render("form", { error: "failed to save Member" });
  }
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
  storeMember,
  form,
  gallery,
  service,
};
