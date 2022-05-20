module.exports = function(sequelize, DataTypes){
	let CMMiembro = sequelize.define('CMMiembro', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
        nombre: {type: DataTypes.STRING, allowNull:false, unique: true, pintar: [1,2,3,4], name: 'Nombre completo', tipo: 'text'},
        correo: {type: DataTypes.STRING, allowNull:true, pintar: [1,2,3,4], name: 'Correo electronico', tipo: 'text'},
        nacimiento: {type: DataTypes.DATE, allowNull:true, pintar: [1,2,3,4], name: 'Fecha de nacimiento', tipo: 'datetime-local'},
        telefono: {type: DataTypes.INTEGER, allowNull:true, pintar: [1,2,3,4], name: 'Numero de telefono', tipo: 'number'},
        direccion: {type: DataTypes.STRING, allowNull:true, pintar: [1,2,3,4], name: 'Direccion de residencia', tipo: 'text'},
        foto: {type: DataTypes.STRING, allowNull:true, pintar: [1,2,3,4], name: 'Foto de perfil', tipo: 'text'},
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {representante: ['nombre']},
		classMethods:  { associate: function(models){ 
            CMMiembro.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}})
        }}, 
		multiples: [
            {id: 'ContactoId', tipo: 'multiple', botonera: ['insertar'], pintar: [1,2,3,4], name: 'Agregar medios para contactarlo', modelo_insertar: 'SCContacto', campo_padre: 'SCMiembroId'},
            {id: 'ParentescoId', tipo: 'multiple', botonera: ['insertar'], pintar: [1,2,3,4], name: 'Agregar parentesco con otro miembro', modelo_insertar: 'SCParentesco', campo_padre: 'SCMiembroId'}
        ],
		seguridad: {
			1: 'CMMiembroIns', 2: 'CMMiembroAct', 3: 'CMMiembroEli', 4: 'CMMiembroBus' 
		}
	});
	return CMMiembro;
}