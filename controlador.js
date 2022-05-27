var express = require('express');
var router = express.Router();
const seguridad = require('../Seguridad/servicios.js');
const core_funciones = require('../../core/funciones.js');
const services = require('./servicios.js');

router.post('/agregar_asistencia_miembro', async (req,res,next)=>{
    try{
        let valores = core_funciones.validar_values(req.body.values, req.user.id);
        let respuesta = await services.agregar_asistencia_miembro(valores);
        res.json(respuesta);
    }catch(error){
        next(error);
    }
});

module.exports = router;