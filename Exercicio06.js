while(true){
    var x = prompt("Digite um número/ Caso queira sair do progama digite 'N': ");
    var y = prompt("Digite um número/ Caso queira sair do progama digite 'N': ");
    if (x == "N" || y == "N" ){
        break; 
    }
    var soma = Number(x) + Number(y);
    console.log("Soma dos valores: " + soma);
}


