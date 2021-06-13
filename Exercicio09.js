var x = prompt("Digite o número para calcular seu fatorial: ")

function fatorial (x){
    if (x === 0){
        return 1; 
    }
    else{
        return(x * fatorial (x - 1));
    }
}
console.log("O fatorial de " + x + " é: " + fatorial(x)); 