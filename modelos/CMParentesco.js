module.exports = function(sequelize, DataTypes){
	let CMParentesco = sequelize.define('CMParentesco', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
            CMParentesco.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
            CMParentesco.belongsTo(models.CMMiembro, {foreignKey: {allowNull: false}}),
            CMParentesco.belongsTo(models.CMMiembro, { as: 'Pariente',foreignKey: {allowNull: false}}),
            CMParentesco.belongsTo(models.CMTipoParentesco, {foreignKey: {allowNull: false}})
        }}, 
		relaciones: {
			CMMiembroId: {pintar: [1,2,3,4], name: 'Miembro', tipo: 'select'},
			ParienteId: {pintar: [1,2,3,4], name: 'Quien es su pariente', tipo: 'select'},
			CMTipoParentesco: {pintar: [1,2,3,4], name: 'Tipo de parentesco', tipo: 'select'},
		},
		seguridad: {
			1: 'CMParentescoIns', 2: 'CMParentescoAct', 3: 'CMParentescoEli', 4: 'CMParentescoBus' 
		}
	});
	return CMParentesco;
}