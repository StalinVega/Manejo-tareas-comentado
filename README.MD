## Aplicación de comandos NodeJS

Recuerda instalar los paquetes

```
npm install
```
## Descripción
 Este programa simula la gestión de tareas
 ya que podemos crear,listar dependiendo el estado,actualizar estados,borrar
 con la ayuda del módulo de yargs.
 Este programa se a realizado tiene como base funciones ya que con ellas 
 podemos aplicar la taxónomia de diseño,vista.controlador con el fin de 
 automatizar recursos y reutilización de codigo.

 ## Finalidad
 La finalidad de este programa es el manejo de tareas en donde realizamos un menu con
 las opciones de crear,listar,actualizar y borrar, en donde guardamos en un archivo tipo JSON
todas las tareas para asi poder trabajar con ellas.
## Alias
```
[-d]-> descripción
[-c]->completado
```
## Ejecución crear
```
node app.js [elección del menu] [alias] [en nombre de la tarea]
```
## Ejecución listar
```
node app.js [elección del menu] [alias] [tipo de completado]
```
## Ejecución actualizar
```
node app.js [elección del menu] [alias] [el nombre de la tarea] [alias] [tipo de completado]
```
## Ejecución borrar
```
node app.js [elección del menu] [alias] [el nombre de la tarea]
```
