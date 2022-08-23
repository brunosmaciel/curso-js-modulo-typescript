export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;
  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }
  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColabs() {
    console.log(this.colaboradores);
  }
}

class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) { }
}
const empresa1 = new Empresa('BSM Automoveis', '36.084.610/0001-68');
console.log(empresa1);
const colaborador1 = new Colaborador('Bruno', 'Maciel');
// const colaborador2 = new Colaborador('Marcos', 'Leonardo');
// const colaborador3 = new Colaborador('Mathias', 'Suarez');
empresa1.adicionarColaborador(colaborador1);
console.log(empresa1);
