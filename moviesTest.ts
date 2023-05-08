import { Movies } from "./movies";
import { Profesional } from "./profesional";

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
mov.printAllHere()