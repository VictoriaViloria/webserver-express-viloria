const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
//Express HBS
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Victoria',
        anio: new Date().getFullYear()
    });
})

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
app.get('/data', (req, res) => {
    res.send('hola data');
})
app.listen(3000, () => {
    console.log('escuchando peticiones en el puerto 3000');
});