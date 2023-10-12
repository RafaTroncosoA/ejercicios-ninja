


class ninja{
    constructor(nombreAtr,saludAtr){
        this.nombre = nombreAtr
        this.salud = saludAtr
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName(){
        console.log("Hola soy "+this.nombre)
    }
    showStats(){
        console.log("Nombre: "+ this.nombre)
        console.log("Salud: "+ this.salud)
        console.log("velocidad: "+ this.velocidad)
        console.log("Fuerza: "+ this.fuerza)
}
drinkSake(){
    this.salaud= this.salud + 10
}
}

const ninja1 = new ninja("Hyabusa",20);
ninja1.sayName();
ninja1.showStats();
