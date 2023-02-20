function* generatorFunction(i) {
  yield i;

  yield i + 10;
}

const generator = generatorFunction(10);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
