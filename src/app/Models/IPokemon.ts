export class PokemonModel{
    private id:number;
    private nombre:String;
    private imagen:String;
    private vida:number;
    private ataque:number;
    private defensa:number;
    private tipo:String;

    constructor(id:number, nombre:String, imagen:String, vida:number, ataque:number, defensa:number, tipo:String){
  this.id = id
  this.nombre = nombre
  this.imagen = imagen
  this.vida = vida
  this.ataque = ataque
  this.defensa = defensa
  this.tipo = tipo
  }

  /*Getter*/
  
  getId():number{
    return this.id;
  }

  getNombre():number{
    return this.id;
  }

  getImagen():number{
    return this.id;
  }

  getVida():number{
    return this.id;
  }

  getAtaque():number{
    return this.id;
  }

  getDefensa():number{
    return this.id;
  }

  getTipo():number{
    return this.id;
  }
/*Setters */
 setId(id:number):void{
    this.id= id;
}      

setNombre(id:number):void{
    this.id= id;
}      

setImagen(id:number):void{
    this.id= id;
}      

setVida(id:number):void{
    this.id= id;
}      

setAtaque(id:number):void{
    this.id= id;
}      

setDefensa(id:number):void{
    this.id= id;
}      

setTipo(id:number):void{
    this.id= id;
}      
/*Metodos de clase*/
mostrarPokemon():string{
    return "ID: "+ this.id + "Nombre: "+ this.nombre+ "Imagen: "+this.imagen+"Vida: "+this.vida+"Ataque: "+this.ataque+"Defensa: "+this.defensa+"Tipo: "+this.tipo;
}  
 

}

