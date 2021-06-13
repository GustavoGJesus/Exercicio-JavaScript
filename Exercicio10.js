var notas = []; 
var media = 0;
var semestres = Number(prompt("Qual é a quantidade de semestre ?")); 

for (var i = 0; i < semestres; i++){
    notas[i] = Number(prompt("Qual foi a sua nota ? "));
    media += notas[i];
}
var mediaFinal = media / semestres; 
console.log("Notas: \n" + notas + "\nA sua média é: \n" + mediaFinal); 
