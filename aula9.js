const { lookahead } = require("./base");

// console.log(lookahead);

// console.log(lookahead.match(/.+[^in]active$/gim));

// pisitive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// pisitive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookahead (frases que Não tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookahead (frases que Não tem active)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive lookbehind (Frases que começam com ONLINE )
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// Negative lookbehind (Frases que não começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
254.978.456-12
111.111.111-11
963.987.325-54
888.888.888-88
`;

console.log(
  cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)
);
