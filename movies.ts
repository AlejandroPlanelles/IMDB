import { Profesional } from "./profesional"
export class Movies {
////// constructor
 public title:string
 public releaseYear:number
 public nacionality:string
 public genre:string
 public actors:Profesional[]
 public director:Profesional
 public writer:Profesional
 public language:string
 public plataforma:string
 public isMCU:boolean 
 public mainCharacterName:string
 public producer:string
 public distributor:string

        constructor (title:string, releaseYear:number, nacionality:string, genre:string){

this.title=title
this.releaseYear=releaseYear
this.nacionality=nacionality
this.genre=genre
this.actors
this.director
this.writer
this.language
this.plataforma
this.isMCU
this.mainCharacterName
this.producer
this.distributor
        }
/////////////////metodo

public printAllHere(){
    console.log(this.title),
    console.log(this.actors),
    console.log(this.director),
    console.log(this.distributor),
    console.log(this.genre),
    console.log(this.isMCU),
    console.log(this.language),
    console.log(this.mainCharacterName),
    console.log(this.nacionality),
    console.log(this.plataforma),
    console.log(this.producer),
    console.log(this.releaseYear),
    console.log(this.writer)

}


}