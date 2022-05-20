module.exports = function(sequelize, DataTypes){
	let CMEvento = sequelize.define('CMEvento', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
        titulo: {type: DataTypes.STRING, allowNull: false, pintar: [1,2,3,4], unique:true, name: 'Nombre del evento', tipo: 'text'},
		fecha: {type: DataTypes.DATE, allowNull: false, pintar: [1,2,3,4], unique: true, name: 'Fecha del evento', tipo: 'date'}
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['titulo']},
		classMethods:  { associate: function(models){ 
			CMEvento.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}})
		}},
		multiples: [
			{id: 'CMAsistenciaId', tipo: 'multiple', botonera: ['insertar'], pintar: [1,2,3,4], name: 'Agregar asistente', modelo_insertar: 'CMAsistencia', campo_padre: 'CMEventoId'},
		],seguridad: {
			1: 'CMEventoIns', 2: 'CMEventoAct', 3: 'CMEventoEli', 4: 'CMEventoBus' 
		}
	});
	return CMEvento;
}