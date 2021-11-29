//const { Router } = require('express')
//const Usuario = require('../../models/usuario/usuario')

//const router = Router()

/*router.get("/", async (req, res) => {
  console.log("GET /usuarios")

})

router.post("/crear-usuario", async (req, res) => {
  console.log("Post /crear-usuarios");
  console.log(req.body);
  const usuario = new Usuario();

  usuario.correo = req.body.correo;
  usuario.identificacion = req.body.identificacion;
  usuario.nombre = req.body.nombre;
  usuario.apellido = req.body.apellido;
  usuario.rol = req.body.rol;
  usuario.estado = req.body.estado;

  usuario.save((err, usuarioGuardado) => {
    console.log("error:", err);
    console.log("usuario:", usuarioGuardado);
    if (err)
      return res
        .status(500)
        .send({ message: `Error al guardar el usuario: ${err}` });

    res.status(200).send({ usuarioGuardado });
  });
})

router.get("/about", (req, res) => {
  console.log("GET /about");
})

router.get("/editar-usuario/:id", async (req, res) => {
  console.log("GET /editar-usuario/:id");
})

router.post("/editar-usuario/:id", (req, res) => {
  console.log("Post /editar-usuario/:id");
})

module.exports = router*/
