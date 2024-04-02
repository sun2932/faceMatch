const mongoose = require("mongoose");

const dbSchema = require("../DB/faceSchema");

const model = mongoose.model("FaceData", dbSchema);

const register = async (req, res) => {
  const { name, mail, password, image } = req.body;

  try {
    const user = await model.findOne({ mail: mail });
    if (user) {
      res.send({ message: "User already exists" });
    } else {
      const newUser = new model({
        name,
        mail,
        password,
        image,
      });
      await newUser.save();
      res.send({
        message: "Successfully registered, please login now!",
      });
      console.log(req.body);
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("user data-->", req.body);

    const user = await model.findOne({ mail: email });
    console.log(user);
    if (user) {
      if (password === user.password) {
        console.log("user data-->", req.body);
        // If login successful, send confirmation message and user data
        res.send({ message: "login successfully", user: user });
      } else {
        res.send({ message: "password does not match" });
      }
    } else {
      res.send({ message: "user does not exist" });
    }
  } catch (error) {
    // Handle any errors that occur during the operation
    console.error("Error occurred:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { register, login };
// module.exports = login;
