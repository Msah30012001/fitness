const express = require("express");
const router = express.Router();
const {
  home,
  about,
  contact,
  storeContact,
  form,
  gallery,
  service
} = require("../controllers/webController");

// frontend page routes
router.route("/").get(home);
router.route("/about").get(about);
router.route("/save-contact").post(storeContact)
router.route("/contact").get(contact);
router.route("/form").get(form);
router.route("/gallery").get(gallery);
router.route("/service").get(service);

module.exports = router;
