const express = require('express');
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
// //helpers
require('./hbs/helpers');
const port = process.env.PORT || 3000;
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     });
//     return palabras.join(' ');
// })
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'vICToriAa',
        // anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'felipe',
        // anio: new Date().getFullYear()
    });
});
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${ port }`);
});
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });
// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'victoria viloria',
//         edad: 35,
//         url: req.url
//     };
//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('hola data');
// })