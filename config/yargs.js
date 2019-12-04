//Creacion de objeto llamado descripcion, nos ayuda a la reutilizacion de codigo,
//sus propiedades me ayudaran al momento de la ejecucion del porgrama
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};
//Creacion de objeto llamado completado, nos ayuda a la reutilizacion de codigo,
//sus propiedades me ayudaran al momento de la ejecucion del porgrama
const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

// creacion de metodo de tipo yargs
const argv = require('yargs')
    .command('crear', 'Crear una tarea', { // se esta definiendo el atributo(crear) que se va utilizar para la corrida del programa
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {// se esta definiendo el atributo(actualizar) que se va utilizar para la corrida del programa
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {// se esta definiendo el atributo(borrar) que se va utilizar para la corrida del programa
        descripcion
    })
    .command('listar','Lista de tareas ',{// se esta definiendo el atributo(listar) que va a listarse segun es estado de la tarea(TRUE/FALSE)
        completado
    })
    .help()
    .argv;

    //Me permite exportar mis metodos para poder utilizarlos en otros programas
module.exports = {
    argv
}