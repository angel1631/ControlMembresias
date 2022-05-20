module.exports = function(sequelize, DataTypes){
	let CMAsistencia = sequelize.define('CMAsistencia', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
        titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique:true, name: 'Nombre del evento', tipo: 'text'},
		fecha: {type: DataTypes.DATE, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Fecha del evento', tipo: 'date'}
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
								CMAsistencia.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}})
							}},
		seguridad: {
			1: 'CMAsistenciaIns', 2: 'CMAsistenciaAct', 3: 'CMAsistenciaEli', 4: 'CMAsistenciaBus' 
		}
	});
	return CMAsistencia;
}