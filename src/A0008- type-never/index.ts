export function criaErro(): never {
  throw new Error('Erro 404');
}

criaErro();
