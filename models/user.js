const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Recuerda agregar un nombre'],
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: [true, 'Recuerda agregar una descripción'],
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: [true, 'Requiere un enlace a la imagen de perfil'],
    validate: {
      validator(v) {
        return /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
          v,
        );
      },
      message: 'Por favor intenta una URL Valida.',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
