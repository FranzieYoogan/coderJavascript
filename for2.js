const notas = [6.4, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Frankie',
    idade: 25,
    peso: 56
};

for (let atributo in pessoa) {
    console.log(atributo, `${pessoa[atributo]}`);
}