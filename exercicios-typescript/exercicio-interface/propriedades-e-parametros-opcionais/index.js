var printUser = function (_a) {
    var nome = _a.nome, idade = _a.idade, _b = _a.genero, genero = _b === void 0 ? 'masculino' : _b;
    console.log("Nome: ".concat(nome));
    console.log("Idade: ".concat(idade));
    console.log("G\u00EAnero: ".concat(genero));
};
var user1 = {
    nome: 'Raul',
    idade: 23
};
printUser(user1);
var user2 = {
    nome: 'Ana',
    idade: 30,
    genero: 'feminino'
};
printUser(user2);
function makeArray(item) {
    return [item];
}
console.log("Array de números:", makeArray(5));
