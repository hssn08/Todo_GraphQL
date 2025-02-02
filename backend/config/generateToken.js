const jwt = require("jsonwebtoken");

const generateToken = (name, email) => {
  const token = jwt.sign(
    {   
        name:name,
        email:email
    
    }, process.env.JWT_SECRET, { expiresIn: "30d" });
  return token
};

module.exports = generateToken;
