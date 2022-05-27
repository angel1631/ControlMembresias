module.exports = function(sequelize, DataTypes){
	var CMGrupo = sequelize.define('CMGrupo', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Titulo', tipo: 'text', length: 150},
        clave: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Clave interna', tipo: 'text'}
	},{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMGrupo.belongsTo(models.Usuario, {as: 'Creador', constraints: false})
							}}, 
		seguridad: {
			1: 'CMGrupoIns', 2: 'CMGrupoAct', 3: 'CMGrupoEli', 4: 'CMGrupoBus' 
		}
	});
	return CMGrupo;
}