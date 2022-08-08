/*eslint-disable */

let nome: string = 'Bruno'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('any-simbol')
// let big: bigint = 10n


//ARRAYS
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayDeNomes: Array<string> = ['Bruno', 'Sazana', 'Maciel']
let arrayDeNomes2: string[] = ['Bruno', 'Sazana', 'Maciel']

// OBJETOS
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Bruno',
  idade: 21,
  adulto: true

}
// FUNCOES

function soma(x: number, y: number) {
  return x + y
}
const result = soma(2, 2)
console.log(result, typeof result)
