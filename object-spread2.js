
const obj1 = {
  a: 'a',
  b: 'b',
  c: 'c',
}


const { a, ...rest } = obj1;

const obj2 = {
  ...rest,
  a: 'A',
}
console.log(obj2);
