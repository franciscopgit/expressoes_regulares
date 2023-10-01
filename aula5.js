const { alfabeto } = require("./base");

// [abc] -> Conjunto [^] -> Negação
// [0-9]
console.log(alfabeto);
console.log(alfabeto.match(/[0-5]+/g));
console.log(alfabeto.match(/[a-h]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-hA-X0-8]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00AE]+/g)); // Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));
