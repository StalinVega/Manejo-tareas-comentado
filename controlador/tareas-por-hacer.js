const fs = require('fs'); //requiere todas las funcionalidades que tiene el modulo fs

let tareasPorHacer = []; // creamos un vector vacio para poder guardar en el.

const cargarDB = () => { // el metodo cargarDB me ayuda a guardar en el vector lo que tengo en mi archivo data.json
    // se realiza un try y catch para un posible salto de error si el archivo data.json pueda estar vacio
    try {
        tareasPorHacer = require('../db/data.json'); //asigno en nuestro vector todo lo que tiene data.json
    } catch (error) {
        tareasPorHacer = [];
    }
}

// el metodo guardarDB me ayuda a guardar en en archivo data.JSON lo que tiene mi vector en formato JSON
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer); //transformo en formato JSON lo que tiene mi vector 
    // modifico el archivo data.json, guardando en formato JSON lo que tiene data
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

// El metodo crear me permite crear una nueva tarea
const crear = (descripcion) => {
    cargarDB(); //cargo lo que ya tenia en mi data.json
    let tarea = { // un obeto de tipo tarea en donde las propiedades descripcion=nombre de mi nueva tarea, completado= el estado de mi nueva tarea
        descripcion,
        completado: false
    };
    tareasPorHacer.push(tarea);// agrego a mi vector la nueva tarea
    guardarDB(); // guardo en mi archivo data.json 
    return tarea;
}
//metodo para trasnformar un string a booleano
const boleano=(valor)=>{
    var boolvalue = valor==="true"?true:false;
    return boolvalue;

}
// este metodo lista todas las tareas por hacer o ya echas en el vector
const getLista = (completado) => {
    cargarDB(); //cargo lo que tengo en mi vector
    
    let nuevoListado = tareasPorHacer.filter(tarea =>tarea.completado === boleano(completado)); // realizo la busqueda acorde el atributo completado
       
    return nuevoListado;
}

// este metodo me ayuda a actualizar una tarea, pasar de estado de no realizada a ya realizada
const actualizar = (descripcion, completado = true) => {
    cargarDB(); //cargadmos todas las tareas en en vector   

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //realizamos la busqueda de la tarea por su nombre objeniendo su identificador(indice)

    if (index >= 0) {

        tareasPorHacer[index].completado = boleano(completado); // realializo el cambio del estado de la tarea mediante el indice
        guardarDB();
        return true; // me devuelve si fue actualizada correctamente
    }
        return false; // me devuelve si no fue actualizada correctamente

}

//este metodo me ayuda a borrar una lista
const borrar = (descripcion) => {
    cargarDB(); // cargamos a nuetsro vector
    // creamos un nuevo vector donde  se van guardar todas las tareas que no tengan el mismo nombre
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;  // asigno el nuevo listado a mi vector original(tareasPorHacer)
        guardarDB(); // guardo el nuevo listado de tareas
        return true;
    }
}

//exportamos todos nuestros metodos para poder utilizarlos en otro programa
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
    //getListaT
}