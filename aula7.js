const { cpfs2 } = require("./base");

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const cpf = "254.244.877-45";
const cpfRefExp = /(\d{3}\.){2}\d{3}\-\d{2}/g;
console.log(cpf.match(cpfRefExp));
