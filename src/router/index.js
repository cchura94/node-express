
function rutas(app) {

    app.get("/", function(requerimiento, respuesta){
        //respuesta.send("<h1>Página de INICIO</h1>");
        let lenguajes = ["Javascript", "Java", "PHP", "C#", "Python"];
        let persona = {
            nombre: "Oscar",
            edad: 20,
            ci: 4353453,
            direccion: "Av. 123 Zona abc"
        }
        respuesta.render("index", {lenguajes, persona})
    });

    app.get("/servicios", function(req, res){
        // res.send("<h1>Nuestros Servicios</h1>");
        res.render("nuestros-servicios");
    });
    
    app.get("/contacto", (req, res) => {
        // res.send("<h1>Contáctenos</h1>");
        res.render("otros/contacto");
    })
}

module.exports = rutas

