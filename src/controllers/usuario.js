const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const readAll = async(req, res) => {
    try {
      const list = await prisma.Usuario.findMany()
      res.status(200).json({ list })
    } catch (error) {
      res.status(400).json({error})
    }
}

const create = async(req, res) => {
  try {
    const result = await prisma.Usuario.create({
        data: {
            nombre:     req.body.nombre,
            clave:      req.body.clave,            
        },
    })
    response.success(req, res, result, 201)
  }
  catch (error) {
      response.error(req, res, "Error interno.", 500, error)
  }
}

module.exports = {
  readAll,
  create,
}