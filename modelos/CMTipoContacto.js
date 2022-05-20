module.exports = function(sequelize, DataTypes){
	var CMTipoContacto = sequelize.define('CMTipoContacto', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Titulo', tipo: 'text', length: 150},
        clave: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Clave interna', tipo: 'text'}
	},{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMTipoContacto.belongsTo(models.Usuario, {as: 'Creador', constraints: false})
							}}, 
		seguridad: {
			1: 'CMTipoContactoIns', 2: 'CMTipoContactoAct', 3: 'CMTipoContactoEli', 4: 'CMTipoContactoBus' 
		}
	});
	return CMTipoContacto;
}