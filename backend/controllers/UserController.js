const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  })
}

const register = async (req, res) => {

 const {name, email, password} = req.body

 // check if user exists
 const user = await User.findOne({email})

 if(user) {
  res.status(422).json({erros: ["Por favor, utilize outro e-mail"]})
  return
 }

 // Generate password hash
 const salt = await bcrypt.genSalt()
 const passwordHash = await bcrypt.hash(password, salt)

 // Create User
 const newUser = await User.create({
  name,
  email,
  password: passwordHash
 })

 if(!newUser) {
  res.status(422).json({erros: ["Houve um erro, por favor tente mais tarde"]})
  return
 }

  res.status(201).json({
    _id: newUser.id,
    token: generateToken(newUser._id)
  })
}

//Sign user in
const login = async(req, res) => {
  
  const {email, password} = req.body

  const user = await User.findOne({email})

  //check if user exists
  if(!user){
    res.status(404).json({erros: ["Usuário não encontrado."]})
    return
  }

  //check if password is matches
   if(!(await bcrypt.compare(password, user.password))){
    res.status(404).json({erros: ["Senha inválida."]})
    return
   }

   //return user with token
   res.status(201).json({
    _id: user.id,
    profileImage: user.profileImage,
    token: generateToken(user._id)
  })
}

const getCurrentUser = (req, res) => {
  const user = req.user

  res.status(200).json(user)
}

module.exports = {
  register,
  login,
  getCurrentUser,
}