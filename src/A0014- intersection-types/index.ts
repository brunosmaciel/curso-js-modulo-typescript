type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const p1: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Sazana',
  idade: 30,
};
console.log(p1);

export { p1 };
