var convidados = [
    {nome: 'Gustavo', idade: 19, genero: 'masculino'},
    {nome: 'Alice', idade: 36, genero: 'feminino'},
    {nome: 'Guilherme', idade: 10, genero: 'masculino'},
    {nome: 'Lucas', idade: 14, genero: 'masculino'},
];

//Array ordenadado
const maioresDeIdade = convidados
    .filter(convidado => convidado.idade > 18) // .filter () => cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    .sort((item1, item2) => item1.nome < item2.nome ? -1 : 1); // .sort() => O método sort() ordena os elementos do próprio array e retorna o array.

console.log(maioresDeIdade);