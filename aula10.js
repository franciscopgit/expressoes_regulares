// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Não números
const naoNumerosRegEx = /\D/;

// Valida IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Checando um cpf
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida telefone
const validaTelefone = /^(\(\d{2}\)\s*)?(\d{4})-(\d{4})$/g

// Valida senhas fortes
const senhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=[0-9])(?=.*[!@#$%\]\)]).{8,}$/g

// Validar e-mails




/* 
Um texto que tem palavras acentuadas e quebras de linhas.
Atenção, este é um texto para capturar todas as palavras.
Mesmo que não forem macth de \w
Vamos ver se seremos bem sucedidos.
*/
