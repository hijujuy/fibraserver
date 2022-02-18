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
    return Promise.reject('El nombre de usuario no fué registrado.');
  }
  else if (usuario.nombre == nombre) {
    return true;
  }
}

const nombreNoExists = async (nombre = '') => {
  // Verificar si el nombre de usuario no existe
  
  const usuario = await prisma.Usuario.findFirst({
    where: {
      nombre: nombre,
    },
  });
      
  if (!usuario){
    return true;
  }
  else if (usuario.nombre == nombre) {
    return Promise.reject('El nombre de usuario ya fué registrado.')
  }
}

module.exports = {
    nombreExists, nombreNoExists
}