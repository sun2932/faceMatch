const express = require("express");

const {register,login} = require("../controllers/controller");

const router = express.Router();

router.route("/Register").post(register);
router.route("/Login").post(login);

module.exports = router;
