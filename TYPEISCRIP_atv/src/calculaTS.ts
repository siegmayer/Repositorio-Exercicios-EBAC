function multiplicaNumeros (num1: number ,num2: number): number{
    return num1 * num2;
}

function saudacaoNome (nome: string){
    return "Olá " + nome;
}

const resultado = multiplicaNumeros(17,18);
const setNome = saudacaoNome("Brayan");
console.log(resultado);
console.log(setNome);
