var convidados = [];
var quantidadeConv = Number(prompt("Quantidade de convidados: "))

for (i = 0; i < quantidadeConv; i++){
    var nome = prompt("Informe o nome do convidado " +i+"?");
    var idade = prompt("Informe a idade do convidado " +i+"?");
    var cpf = prompt("Informe o CPF do convidado " +i+"?");
    if (idade > 18){
        console.log("Você é menor de idade, tente novamente ano que vem...")
    }


convidados.push({nome, idade, cpf});
console.log(convidados);
}