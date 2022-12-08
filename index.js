const funcaoEs6 = (x) => x % 2 === 0;

function funcaoES5(x) {
  return x % 2 === 0;
}

const numbers = [1, 2, 3];

console.log(numbers.some(funcaoES5));

console.log(numbers.every(funcaoEs6));

///Typed arrays
const typedArrayInt = new Int16Array(1);
const typedArrayInt8Array = new Int8Array(1);

typedArrayInt[0] = 1;
console.log(typedArrayInt[0]);
typedArrayInt[0] = 'sa';

console.log(typedArrayInt[0]);
