
class Monitor{
    nome: string;
    altura: number;
    largura: number;
    

    constructor(nome:string ,altura: number, largura: number ){
        this.nome = nome
        this.altura = altura
        this.largura = largura
    }
    calculaCM(): number{
        return this.largura * this.altura ;
    }
    falaInfo(){
        console.log('esse monitor é da marca ' + this.nome + ",tem de altura: " + this.altura + " e de largura: " + this.largura + ", totalizando " + this.calculaCM() + " centimetros²")
    }
}

const monitor1 = new Monitor("LG",20,35)
const monitor2 = new Monitor("AOC",35,55)

console.log("total M1")
console.log(monitor1.calculaCM());
console.log("")
console.log("total M2")
console.log(monitor2.calculaCM());
console.log("")
console.log("<<<<<<<<<<<< Informaçoes monitor1 >>>>>>>>>>>>>>>")
console.log("")
monitor1.falaInfo();
console.log("")
console.log("<<<<<<<<<<<<< Informaçoes monitor2 >>>>>>>>>>>")
console.log("")
monitor2.falaInfo();
console.log("")



