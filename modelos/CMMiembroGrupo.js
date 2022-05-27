module.exports = function(sequelize, DataTypes){
	let CMMiembroGrupo = sequelize.define('CMMiembroGrupo', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['CMGrupoId.titulo', 'CMMiembroId.nombre']},
		classMethods:  { associate: function(models){ 
								CMMiembroGrupo.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
								CMMiembroGrupo.belongsTo(models.CMGrupo, {foreignKey: {allowNull: false}}),
								CMMiembroGrupo.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}})
							}}, 
		relaciones: {
			CMGrupoId: {pintar: [1,2,3,4], name: 'seleccione el grupo de trabajo', tipo: 'select'},
			CMMiembroId: {pintar: [1,2,3,4], name: 'seleccione el miembro', tipo: 'select'},
		},
		seguridad: {
			1: 'CMMiembroGrupoIns', 2: 'CMMiembroGrupoAct', 3: 'CMMiembroGrupoEli', 4: 'CMMiembroGrupoBus' 
		}
	});
	return CMMiembroGrupo;
}