const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

const readAll = async(req, res) => {
    try {
      const list = await prisma.usuario.findMany()
      res.status(200).json({ list })
    } catch (error) {
      res.status(400).json({error})
    }
}

const create = async(req, res) => {
  try {
    const { email, clave } = req.body;
    const salt = await bcrypt.genSalt(10);
    const result = await prisma.usuario.create({
        data: {
          email:    email,
          clave:    await bcrypt.hash(clave, salt),
          perfil:   {
            connect: {
              descripcion: 'operador'
            },
          },
        },
    })
    response.success(req, res, result, 201)
  }
  catch (error) {
    response.errors(req, res, "Usuario o contraseña invalidos.", 400, error);
  }
}

const createSupervisor = async(req, res) => {
  try {
    const { email, clave } = req.body;
    const salt = await bcrypt.genSalt(10);
    const result = await prisma.usuario.create({
        data: {
          email:    email,
          clave:    await bcrypt.hash(clave, salt),
          perfil:   {
            connect: {
              descripcion: 'supervisor'
            },
          },
        },
    })
    response.success(req, res, result, 201)
  }
  catch (error) {
    response.errors(req, res,  "Usuario o contraseña invalidos.", 400, error);
  }
}

const createTitular = async(req, res) => {
  try {
    const { email, clave } = req.body;
    const salt = await bcrypt.genSalt(10);
    const result = await prisma.usuario.create({
        data: {
          email:    email,
          clave:    await bcrypt.hash(clave, salt),
          perfil:   {
            connect: {
              descripcion: 'titular'
            },
          },
        },
    })
    response.success(req, res, result, 201)
  }
  catch (error) {
    response.errors(req, res,  "Usuario o contraseña invalidos.", 400, error);
  }
}

const createAdministrador = async(email, clave) => {
  try {    
    const salt = await bcrypt.genSalt(10);
    const result = await prisma.usuario.create({
        data: {
          email:    email,
          clave:    await bcrypt.hash(clave, salt),
          activo: true,
          perfil:   {
            create: {
              descripcion: 'administrador'
            },
          },
        },
    })
    return result;
  }
  catch (error) {
    return error;
  }
}

module.exports = {
  readAll,
  create,
  createSupervisor,
  createTitular,
  createAdministrador,
}