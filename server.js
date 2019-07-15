const express = require('express');
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Victoria',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'felipe',
        anio: new Date().getFullYear()
    });
});
app.listen(3000, () => {
    console.log('escuchando peticiones en el puerto 3000');
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