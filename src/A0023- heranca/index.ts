export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCPF(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + this.sobrenome;
  }
}
new Pessoa('Bruno', 'Maciel', 21, '04006209010');
export class Aluno extends Pessoa {}
const aluno = new Pessoa('Bruno', 'Maciel', 21, '04006209010');
console.log(aluno.getNomeCompleto());
