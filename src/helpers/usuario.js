const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const nombreExists = async (nombre = '') => {
  // Verificar si el nombre de usuario existe
  
  const usuario = await prisma.Usuario.findFirst({
    where: {
      nombre: nombre,
    },
  });
      
  if (!usuario){
    return true;
  }
  else if (nombre == usuario.nombre){
    throw new Error(`El usuario ${nombre} ya fué registrado`);
  }
}

module.exports = {
    nombreExists,
}