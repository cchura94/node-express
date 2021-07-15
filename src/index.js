// importando paquetes de terceros (NPM)
const express = require("express")

// importando paquetes locales
const misrutas = require("./router/index.js")

// configurar los paquetes importados
let app = express()

// declarar variables auxiliares
let puerto = 3000
let host = "127.2.0.1"

// carga de archivos estaticos
app.use(express.static('public'))

// habilitar motor de Plantilla
app.set("views", "./src/views")
// PUG
// app.set('view engine', 'pug')

// HBS	
/*
const consolidate = require('consolidate')
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs')
*/
// EJS
app.set('view engine', 'ejs')
// definir rutas
misrutas(app)

// levantar el servidor
app.listen(puerto, () => {
    console.log(`Servidor levantado en http://${host}:${puerto}`);
})