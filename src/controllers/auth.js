require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.SECRET;

const signup = async(req, res) => {
  try {
    const { nombre, clave } = req.body;
    const salt = await bcrypt.genSalt(10);

    const result = await prisma.Usuario.create({
      data: {
        nombre,
        clave: await bcrypt.hash(clave, salt),
      }
    });
    const token = jwt.sign({ id: result.id }, secret, {
      expiresIn: 300, //expresado en segundos
    });

    res.status(201).json({token});

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

const signin = async(req, res) => {
  try {
    const { nombre, clave } = req.body;
    const result = await prisma.Usuario.findUnique({
      where:{
        nombre : nombre
      }
    })

    const coincideClave = await bcrypt.compare(clave, result.clave);
    if (!coincideClave) {
      return res.status(401).json({
        token: null,
        message: 'Clave incorrecta.'
      });
    }
    const token = jwt.sign({ id: result.id }, secret, {
      expiresIn: 300, //expresado en segundos
    });

    res.status(200).json({ token })

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

module.exports = {
  signup, signin,
}
