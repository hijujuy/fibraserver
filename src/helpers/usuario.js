const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const _findEmail = async (email) => {
  const usuario = await prisma.usuario.findFirst({
    where: {
      email: email
    },
    select: {
      email: true
    }
  });
  return usuario;
}

const _findUnique = async (id) => {
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

const emailExists = (email = '') => {
  // Verificar si el nombre de usuario existe
  const usuario = _findEmail(email);
    
  if (!usuario){
    return Promise.reject('El nombre de usuario no fué registrado.');
  }
  else if (usuario.email == email) {
    return true;
  }
}

const emailNoExists = (email = '') => {
  // Verificar si el nombre de usuario no existe
  const usuario = _findEmail(email);
      
  if (!usuario){
    return true;
  }
  else if (usuario.nombre == nombre) {
    return Promise.reject('El nombre de usuario ya fué registrado.')
  }
}

const esAdministrador = () => {
  // Verificar si el usuario autenticado posee el perfil de Administrador
  const usuario = _findUnique(id);

  if (usuario.perfil.descripcion === 'administrador') {
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.');
  }
}

const esTitular = () => {
  const usuario = _findUnique(id);

  if (usuario.perfil.descripcion === 'titular') { 
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.')
  }
}

const esSupervisor = () => {
  const usuario = _findUnique(id);

  if (usuario.perfil.descripcion === 'supervisor') { 
    return true;
  }
  else {
    return Promise.reject('El usuario no tiene autorizacion.')
  }
}

module.exports = {
    emailExists, 
    emailNoExists,
    esAdministrador,
    esTitular,
    esSupervisor,
}