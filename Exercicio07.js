/*var xi = Number(prompt("Digite o valor incial: "));
var yf = Number(prompt("Digite o valor final:  "));
var vc = Number(prompt("Digite o valor de incrementação: "));

var resultado = 0; 

for(i = xi; i <= xf; i += vc){
    resultado = Math.log(i); 
    console.log(resultado);
}*/

var xi = Number(prompt("Digite o valor inicial"));
var xf = Number(prompt("Digite o valor final"));
var vc = Number(prompt("Digite o valor de incremento"));

var res = 0;

for(x = xi;x <= xf;x+=vc) {
	res = Math.log(x);
	console.log(res);
}
