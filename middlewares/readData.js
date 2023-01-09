const fsPromises = require('fs').promises;

const readData = (dataPath, selector, idPresent) => (req, res, next) => {
  fsPromises
    .readFile(dataPath, { encoding: 'utf-8' })
    .then((data) => {
      if (idPresent) {
        const { id } = req.params;
        const user = JSON.parse(data).find((obj) => obj._id === id);
        if (!user) {
          console.log({ message: 'ID de usuario no encontrado.' });
          res.status(404).send({ message: 'ID de usuario no encontrado.' });
          return;
        }
        console.log(JSON.stringify(user));
        res.send(`Datos de usuari@ con id ${id}: Nombre: ${user.name}
      Descripción: ${user.about}, Link de su Avatar: ${user.avatar}`);
      } else {
        console.log(data);
        res.send(`Datos de ${selector}: ${data}`);
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
};

module.exports = readData;
