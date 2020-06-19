//Ahorrar computo guardando ciertos resultados, para no tener que recalcularlos nuevamente

function factorial(numero){
    if(!this.chache[numero]){    //Si la cache esta definida
        this.cache[numero] = {}
    }

    if(numero == 1){
        return 1;
    }else{
        this.cache[numero] = numero * factorial(numero - 1);      //Guardamos en cache
        return this.cache[numero];
    }
}

console.log(factorial(7));