/* eslint-disable no-console */
const express = require('express');
const hbs = require('hbs');

const app = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, (err) => { console.error(err); });

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Juan Sarabia',
    titulo: 'Curso de Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Juan Sarabia',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Juan Sarabia',
    titulo: 'Curso de Node',
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(8080);
