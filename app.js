const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use((req, res) => {
  console.log({ message: 'Recurso solicitado no encontrado.' });
  res.status(404).send({ message: 'Recurso solicitado no encontrado.' });
});

app.listen(PORT);
