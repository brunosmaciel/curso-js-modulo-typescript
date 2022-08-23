export abstract class Personagem {
  protected abstract emoji: string;
  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }
  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' AMATERASU!!!!!!!!!!!!!!!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DA}';
  bordao(): void {
    console.log(`FNJDSBFJHKDSBHJKFSDBJKFB `);
  }
}

const sasuke = new Guerreiro('Sasuke', 100, 1000);
const baku = new Monstro('Baku', 50, 1000);
sasuke.atacar(baku);
baku.atacar(sasuke);
