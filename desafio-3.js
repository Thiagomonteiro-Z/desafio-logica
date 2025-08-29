class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type

    }
    atacar(){
        let atacar = "";

        if(this.type == "mago"){
            atacar = "magia"
        } else if(this.type == "guerreiro"){
            atacar = "espada"
        } else if(this.type == "monge"){
            atacar = "artes marciais"
        } else if(this.type == "ninja"){
            atacar = "shuriken"
        }

        console.log(`o ${this.type} atacou usando ${atacar}`)
    }
}

 let teste1 = new Hero("Kratos", 300 , "ninja");

 teste1.atacar()