module.exports = function(sequelize, DataTypes){
	var CMTipoParentesco = sequelize.define('CMTipoParentesco', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Titulo', tipo: 'text', length: 150},
        clave: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Clave interna', tipo: 'text'}
	},{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMTipoParentesco.belongsTo(models.Usuario, {as: 'Creador', constraints: false})
							}}, 
		seguridad: {
			1: 'CMTipoParentescoIns', 2: 'CMTipoParentescoAct', 3: 'CMTipoParentescoEli', 4: 'CMTipoParentescoBus' 
		}
	});
	return CMTipoParentesco;
}