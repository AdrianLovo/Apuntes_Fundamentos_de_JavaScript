setTimeout(() => console.log('Console lo B'), 0);   //Ejucta la funcion en 0 Segundos pero en la cola de tareas
console.log('Console log A');
console.log('Console log C');


setTimeout(() => console.log('Console log D'), 2000);