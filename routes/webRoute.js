const express = require("express");
const router = express.Router();
const {
  home,
  about,
  contact,
  storeContact,
  storeMember,
  form,
  gallery,
  service,
  bmi
} = require("../controllers/webController");

// frontend page routes
router.route("/").get(home);
router.route("/about").get(about);
router.route("/save-contact").post(storeContact)
router.route("/contact").get(contact);
router.route("/save-member").post(storeMember);
router.route("/form").get(form);
router.route("/gallery").get(gallery);
router.route("/services").get(service);
router.route("/bmi").get(bmi);

module.exports = router;
