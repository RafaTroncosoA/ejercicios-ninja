


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


// Creacion clase Sensei


class Sensei extends ninja {
    constructor(nombre){
        super(nombre,200)
        // this.salud = 200
        this.velocidad= 10
        this.fuerza = 10
        this.sabiduria = 10
        
    }

    speakWisdom() {
        this.drinkSake()
        console.log(" Frase sabia")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.showStats()
superSensei.speakWisdom()