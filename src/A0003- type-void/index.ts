function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Sazana',

  sayMyName(): void {
    console.log(`${this.nome},${this.sobrenome}`);
  },
};

semRetorno('Bruno', 'Sazana', 'Maciel');
console.log(pessoa, pessoa.sayMyName);

export { pessoa };
