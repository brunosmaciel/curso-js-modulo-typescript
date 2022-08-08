let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
const p1 = createPerson('Bruno', 'Sazana');
const p2 = createPerson('Marcelo');
console.log(p1.firstName);
console.log(p2);
