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
  
  const usuario = await prisma.usuario.findFirst({
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

const esAdministrador = async () => {
  // Verificar si el usuario autenticado posee el perfil de Administrador
  const usuario = _findUnique(id);

  if (usuario.perfil === 'administrador') {
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.');
  }
}

const esTitular = async () => {
  const usuario = _findUnique(id);

  if (usuario.perfil === 'titular') { 
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.')
  }
}

const esSupervisor = async () => {
  const usuario = _findUnique(id);

  if (usuario.perfil === 'supervisor') { 
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.')
  }
}

const _findUnique = (id) => {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id : id,
    },
    select: {
      perfil: true
    },
  });
  return usuario;
}

module.exports = {
    nombreExists, 
    nombreNoExists,
    esAdministrador,
    esTitular,
    esSupervisor,
}