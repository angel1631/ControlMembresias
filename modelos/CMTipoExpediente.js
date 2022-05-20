module.exports = function(sequelize, DataTypes){
	var CMTipoExpediente = sequelize.define('CMTipoExpediente', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Titulo', tipo: 'text', length: 150},
        clave: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Clave interna', tipo: 'text'}
	},{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMTipoExpediente.belongsTo(models.Usuario, {as: 'Creador', constraints: false})
							}}, 
		seguridad: {
			1: 'CMTipoExpedienteIns', 2: 'CMTipoExpedienteAct', 3: 'CMTipoExpedienteEli', 4: 'CMTipoExpedienteBus' 
		}
	});
	return CMTipoExpediente;
}