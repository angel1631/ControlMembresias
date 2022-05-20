module.exports = function(sequelize, DataTypes){
	let CMAsistencia = sequelize.define('CMAsistencia', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['CMEventoId.titulo', 'CMMiembroId.nombre']},
		classMethods:  { associate: function(models){ 
								CMAsistencia.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
								CMAsistencia.belongsTo(models.CMEvento, {foreignKey: {allowNull: false}}),
								CMAsistencia.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}})
							}}, 
		relaciones: {
			CMMiembroId: {pintar: [1,2,3,4], name: 'Miembros', tipo: 'select'},
		},
		seguridad: {
			1: 'CMAsistenciaIns', 2: 'CMAsistenciaAct', 3: 'CMAsistenciaEli', 4: 'CMAsistenciaBus' 
		}
	});
	return CMAsistencia;
}