import { Movies } from "./movies";

export class Imdb {

///constructor

constructor(public peliculas:Movies[]){ //unico atributo que sea un array de objetos de la clase Movie.

}
///metodos

public printImdb(){
    console.log(this.peliculas)
}
public escribirEnFicheroJSON(nombrefichero:string){

}
}

