const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const verificarToken = async () => {
  const token = jwt.verify(access-token, secret);
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: token.id,
    },
    select: {
      id: true,
    },
  });
  if (!usuario) return Promise.reject('El usuario no esta autenticado.');
  else return true;
}

module.exports = {
  verificarToken,
}