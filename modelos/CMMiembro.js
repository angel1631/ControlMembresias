module.exports = function(sequelize, DataTypes){
	let CMMiembro = sequelize.define('CMMiembro', {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, pintar: [2,3,4], name: 'Identificador', tipo: 'number'},
        nombre: {type: DataTypes.STRING, allowNull:false, orden: 1, unique: true, pintar: [1,2,3,4], name: 'Nombre completo', tipo: 'text'},
        nacimiento: {type: DataTypes.DATE, allowNull:true, orden: 2,pintar: [1,2,3,4], name: 'Fecha de nacimiento', tipo: 'date'},
        telefono: {type: DataTypes.INTEGER, allowNull:true, orden:5, pintar: [1,2,3,4], name: 'Numero de telefono', tipo: 'number'},
        correo: {type: DataTypes.STRING, allowNull:true, orden: 6, pintar: [1,2,3,4], name: 'Correo electronico', tipo: 'text'},
        direccion: {type: DataTypes.STRING, allowNull:true, orden: 7, pintar: [1,2,3,4], name: 'Direccion de residencia', tipo: 'text'},
        foto: {type: DataTypes.STRING, allowNull:true, orden: 8, pintar: [1,2,3,4], name: 'Foto de perfil', tipo: 'archivo'},
    },{
		freezeTableName: true,
		paranoid: true,
		referencia: {titulo_modelo: 'Miembros', representante: ['nombre']},
		classMethods:  { associate: function(models){ 
            CMMiembro.belongsTo(models.Usuario, {as: 'Creador', foreignKey: {allowNull: false}}),
			CMMiembro.belongsTo(models.CMGenero, {foreignKey: {allowNull: false}}),
			CMMiembro.belongsTo(models.CMEstadoCivil, {foreignKey: {allowNull: false}})
        }}, 
		multiples: [
            {id: 'ContactoId', tipo: 'multiple', botonera: ['insertar'], pintar: [1,2,3,4], name: 'Agregar medios para contactarlo', modelo_insertar: 'CMContacto', campo_padre: 'CMMiembroId'},
            {id: 'ParentescoId', tipo: 'multiple', botonera: ['insertar'], pintar: [1,2,3,4], name: 'Agregar parentesco con otro miembro', modelo_insertar: 'CMParentesco', campo_padre: 'CMMiembroId'}
        ],
		relaciones: {
            CMEstadoCivilId: {pintar: [1,2,3,4], orden:4, name: 'Estado Civil Socio', tipo: 'select'},
            CMGeneroId: {pintar: [1,2,3,4], orden: 3, name: 'Genero del socio', tipo: 'select'}
        },
		seguridad: {
			1: 'CMMiembroIns', 2: 'CMMiembroAct', 3: 'CMMiembroEli', 4: 'CMMiembroBus' 
		}
	});
	return CMMiembro;
}