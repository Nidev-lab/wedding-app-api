const Invited =  require("../models/invited");

const getInvited = async (req, res) => {
  try {
    const user = await Invited.findById(req.params.id)
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
};

const postInvited = async (req, res) => {
  const { name, lastName, isPaid, needTransport, isPresent, table } = req.body;
  try {
    const newUser = new Invited({
      name,
      lastName,
      isPaid,
      needTransport,
      isPresent,
      table,
    });

    const usuario = await newUser.save();
    res.status(201).json(usuario.id);
  }
  catch (error) {
    res.status(500).json({
      msg: error
    });
  }
};

const patchInvited = async (req, res) => {
  try {
    await Invited.findByIdAndUpdate(req.params.id, req.body)
    if (req.body.isConfirmed) {
      res.status(200).json({ mensaje: "Genial! Nos alegramos que estarás presente esa noche" })
    } else {
      res.status(200).json({ mensaje: "Que pena! Seguramente encontraremos otro momento para compartir" })
    }
  }
  catch (error) {
    res.status(500).json({
      msg: error
    })
  }
};

module.exports = { getInvited, postInvited, patchInvited };