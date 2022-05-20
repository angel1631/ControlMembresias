module.exports = function(sequelize, DataTypes){
	let CMExpediente = sequelize.define('CMExpediente', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		fecha: {type: DataTypes.DATE, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Fecha de la asistencia', tipo: 'date'}
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMExpediente.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
								CMExpediente.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}})
							}}, 
		relaciones: {
			CMMiembro: {pintar: [1,2,3,4], name: 'Miembros', tipo: 'select'},
		},
		seguridad: {
			1: 'CMExpedienteIns', 2: 'CMExpedienteAct', 3: 'CMExpedienteEli', 4: 'CMExpedienteBus' 
		}
	});
	return CMExpediente;
}