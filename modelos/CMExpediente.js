module.exports = function(sequelize, DataTypes){
	let CMExpediente = sequelize.define('CMExpediente', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		archivo: {type: DataTypes.STRING, pintar: [1,2,3,4], orden: 3, name: 'Adjunto para expediente', tipo: 'archivo'}
	},{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMExpediente.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
								CMExpediente.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}}),
								CMExpediente.belongsTo(models.CMTipoExpediente, {foreignKey: {allowNull:false}})
							}}, 
		relaciones: {
			CMMiembroId: {pintar: [1,2,3,4], orden: 1, name: 'Miembros', tipo: 'select'},
			CMTipoExpedienteId: {pintar: [1,2,3,4], orden: 2, name: 'Tipo expediente', tipo: 'select'},
		},
		seguridad: {
			1: 'CMExpedienteIns', 2: 'CMExpedienteAct', 3: 'CMExpedienteEli', 4: 'CMExpedienteBus' 
		}
	});
	return CMExpediente;
}