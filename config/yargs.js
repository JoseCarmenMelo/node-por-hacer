const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require(`yargs`)
    .command('crear', 'Cerear un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas guardadas', {

    })
    .command('borrar', 'Borra una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv: argv
}