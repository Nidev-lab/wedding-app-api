const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const login = async (req, res) => {
  if (!req.body.user || !req.body.password) {
    return res.status(400).json({ mensaje: "Debe llenar todos los campos." });
  }
  try {
    const user = await User.findOne({ user: req.body.user });
    if (!user) {
      res
        .status(400)
        .send({ mensaje: "Error. No existe usuario registrado con este nombre de usuario" });
      return;
    }
    try {
      const match = await bcrypt.compare(req.body.password, user.password);
      const accessToken = jwt.sign({ user }, process.env.SECRET_KEY);

      if (match) {
        res.status(200).json({
          token: accessToken,
        });
      } else {
        res.status(404).json({ mensaje: "Error: credenciales incorrectas" });
      }
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
     res.status(404).json({ mensaje: error })
  }
};

module.exports = { login };