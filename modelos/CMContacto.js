module.exports = function(sequelize, DataTypes){
	let CMContacto = sequelize.define('CMContacto', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
		dato: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], name: 'Informacion contactarlo', tipo: 'text', length: 150}
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['nombre', 'alias', 'mail']},
		classMethods:  { associate: function(models){ 
								CMContacto.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
                                CMContacto.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}}),
                                CMContacto.belongsTo(models.CMTipoContacto, {foreignKey: {allowNull: false}})
							}},
        relaciones: {
            CMMiembro: {pintar: [1,2,3,4], name: 'Miembros', tipo: 'select'},
            CMTipoContacto: {pintar: [1,2,3,4], name: 'Tipos de contacto', tipo: 'select'},
        },
		seguridad: {
			1: 'CMContactoIns', 2: 'CMContactoAct', 3: 'CMContactoEli', 4: 'CMContactoBus' 
		}
	});
	return CMContacto;
}