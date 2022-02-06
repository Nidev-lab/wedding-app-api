const jwt = require("jsonwebtoken");

const verificarJWT = (req, res, next) => {
  const token =  req.header("access-token");
  
  if(!token) {
    res.status(404).json({ mensaje: "Usted necesita de un token"})
  } else{
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if(err) { 
        res.status(401).json({ auth: false, mensaje: "fallo la autentificación"});
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

module.exports = verificarJWT;