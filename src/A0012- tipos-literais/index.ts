// eslint-disable-next-line prefer-const
export let x = 10;
x = 0b1010;

export function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Amarelo') {
  return cor;
}
console.log(escolhaCor('Verde'));
