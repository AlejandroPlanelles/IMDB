import { Movies } from "./movies";
import * as fs from 'fs';


export class Imdb {

///constructor

constructor(public peliculas:Movies[]){ //unico atributo que sea un array de objetos de la clase Movie.

}
///metodos

public printImdb(){
    console.log(this.peliculas)
}
public escribirEnFicheroJSON(nombrefichero:string){
    
    let imdb1 = JSON.stringify(this.peliculas)
    fs.writeFileSync(nombrefichero, imdb1)
    
}
public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
    
    let imdb3= fs.readFileSync(nombreFichero,"utf-8")
    let imdb2:Imdb = JSON.parse(imdb3)
    return imdb2

}
}

