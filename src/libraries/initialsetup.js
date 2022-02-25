const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { createAdministrador } = require('../controllers/usuario')

const crearPerfiles = async () => {  
  try {
    const perfiles = await prisma.usuario.count();
    if (perfiles === 0) {
      const admin = await createAdministrador('admin', 'admin');
      if (admin) console.log(admin);
    }
    else {
      console.log('No se creó un administrador, porque ya existe.');
    }    
  } catch (error) {
    console.log(error);
  } 
};

module.exports = {
  crearPerfiles,
}