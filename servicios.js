const seguridad = require('../Seguridad/servicios.js');
const modelos = require('../../modelos');
let fn = {};

fn.agregar_asistencia_miembro = async ({CMEventoId, CMMiembroId, CreadorId})=>{
    await seguridad.validar_acceso_v2({access: 'CMCapAsi', user: CreadorId});
    let asistencia_previa = await modelos.CMAsistencia.findAll({WHERE: {CMEventoId, CMMiembroId}});
    if(asistencia_previa.length>0) throw "El miembro ya tiene su asistencia registrada al evento";
    await modelos.CMAsistencia.create({CMEventoId,CMMiembroId,CreadorId});
    return {cod:1,msj:'Todo Ok'};
}
module.exports = fn;