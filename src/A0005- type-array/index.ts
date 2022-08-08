export function multiplicateArgs(...args: Array<number>) {
  return args.reduce((ac, v) => ac * v, 1);
}
export function concatStrings(...args: string[]): string {
  return args.reduce((ac, v) => ac + v);
}

const result = multiplicateArgs(1, 2, 3);
const concat = concatStrings('a', 'b', 'c');
console.log(result, concat);
