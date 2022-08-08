type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: Cores;
};
type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Cian' | 'Magent' | 'Yellow' | 'Black';
type Cores = CorRGB | CorCMYK;
const p1: Pessoa = {
  nome: 'Bruno',
  idade: 21,
  salario: 10,
};
export default function setColor(pessoa: Pessoa, cor: Cores): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setColor(p1, 'Red'));
console.log(p1);
