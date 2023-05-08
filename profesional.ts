export class Profesional{
    ////////////////constructor

    constructor(public name:string, public age:number, public weight:number, 
        public height:number, public isRetired:boolean, public nationality:string,
        public oscarNumbers:number, public profession:string){


        }

////////////////////metodo

public PrintAll(){
    console.log(`name - ${this.name},${"\n"}age - ${this.age},${"\n"} weight - ${this.weight},${"\n"} height - ${this.height},${"\n"} is Retired - ${this.isRetired},${"\n"} nacionality - ${this.nationality},${"\n"}Number of Oscars ${this.oscarNumbers},${"\n"} Profession ${this.profession}`)
}

}