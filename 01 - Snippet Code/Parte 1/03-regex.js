// Este regex debe validar que un string sea un correo electrónico válido.

function validarCorreo() {
   let tuRegex = /^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
   ; // Agrega tu regex
   return tuRegex;
}

module.exports = validarCorreo;
