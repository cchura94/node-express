const pag_controller = require("./../controllers/pagina_controller")
const producto_controller = require("./../controllers/producto_controller")


function rutas(app) {

    app.get("/", pag_controller.inicio);

    app.get("/servicios", pag_controller.servicios);
    
    app.get("/contacto", pag_controller.contacto);

    // rutas para productos
    app.get("/producto", producto_controller.listar);
    app.get("/producto/:id", producto_controller.mostrar);
    app.post("/producto", producto_controller.guardar);
    app.put("/producto/:id", producto_controller.modificar);
    app.delete("/producto/:id", producto_controller.eliminar);
}

module.exports = rutas
