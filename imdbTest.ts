import {Imdb} from "./imdb";
import { Movies } from "./movies";
import { Profesional } from "./profesional";
import * as fs from 'fs';

let leo:Profesional = new Profesional("Leonardo di Caprio",48,85,183,false,"American",1,"actor")
let tom:Profesional = new Profesional("Tom Hanks",66,80,183,false,"American",2,"actor")
let meryl:Profesional = new Profesional ("Meryl Streep",73,60,168,false,"American",3,"actor")
let steve:Profesional = new Profesional ("Steven Spielberg",76,74,172,false,"American",2,"Director")
let tolkien:Profesional = new Profesional("J.R.R. Tolkien",81, 78,176,true,"British",0,"Writer")
let arr = [leo,tom,meryl]
let mov:Movies = new Movies("Titanic",1998,"american","drama")

mov.producer= "mi abuela"
mov.plataforma = "HBO"
mov.mainCharacterName="Jack"
mov.isMCU = false
mov.distributor = "Pixar"
mov.language ="inglés"
mov.director=steve
mov.writer=tolkien
mov.actors = arr


let leo1:Profesional = new Profesional("Ben Aflek",48,85,183,false,"American",1,"actor")
let tom1:Profesional = new Profesional("Bart Simpson",66,80,183,false,"American",2,"actor")
let meryl1:Profesional = new Profesional ("Pikachu",73,60,168,false,"American",3,"actor")
let steve1:Profesional = new Profesional ("Matilda",76,74,172,false,"American",2,"Director")
let tolkien1:Profesional = new Profesional("Cervantes",81, 78,176,true,"British",0,"Writer")
let arr1 = [leo1,tom1,meryl1,]
let mov1:Movies = new Movies("Gladiator",1998,"american","drama")

mov1.producer= "mi abuela"
mov1.plataforma = "HBO"
mov1.mainCharacterName="Jack"
mov1.isMCU = false
mov1.distributor = "Pixar"
mov1.language ="inglés"
mov1.director=steve1
mov1.writer=tolkien1
mov1.actors = arr1

let arrimdb = [mov,mov1]
let varimdb:Imdb = new Imdb(arrimdb)
console.log(varimdb.peliculas)

let imdbobj = JSON.stringify(varimdb)  ///// variable de objeto de imdb

fs.writeFileSync("imdbDDBB.json", imdbobj)
fs.readFileSync("imdbDDBB.json")
JSON.parse(imdbobj)  /// metemos la variable donde hemos convertido la lvariable de la clse a objeto


varimdb.escribirEnFicheroJSON("imdbDDBB.json")

console.log(varimdb.obtenerInstanciaIMDB("imdbDDBB.json"))

