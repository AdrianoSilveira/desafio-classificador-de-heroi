const entradaDados = require('prompt-sync')({sigint: true}) /* pacote para solicitar a entrada do usuário em um programa JavaScript. 
O prompt-sync é um módulo que permite ler a entrada do teclado de forma síncrona. Para usá-lo, você precisa instalá-lo com o 
comando "npm install prompt-sync" no console e depois importá-lo no seu código com o comando "const prompt = require('prompt-sync')()".*/

var continuar = "S" // variavel de validação para continuar

// laço de repetição
while(continuar == "S"){
	let nomeHeroi = entradaDados ("Digite seu nome de Heroi: ")
	let xp = entradaDados ("Digite seu nivel de XP: ")
	let nivel = ""
	
	// verifica se o nivel xp é positivo e se são numerico
	if(xp > 0){
		
		// verifica o nivel do heroi
		if(xp <= 1000) {
			nivel = "Ferro"
		}
		else if(xp <= 2000) {
			nivel = "Bronze"
		}
		else if(xp <= 5000) {
			nivel = "Prata"
		}
		else if(xp <= 7000) {
			nivel = "Ouro"
		}
		else if(xp <= 8000) {
			nivel = "Platina"
		}
		else if(xp <= 9000) {
			nivel = "Ascendente"
		}
		else if(xp <= 10000) {
			nivel = "Imortal"
		}
		else if(xp > 10000) {
			nivel = "Radiante"
		}
	espacamento()
	console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${nivel}`)

	} else {
		
		espacamento()
		console.log("         caracter invalido digite novamento")}


	espacamento()
	cont = entradaDados ("           Deseja continuar? S/N ") //mensagem de continuar
	continuar = cont.toUpperCase()}

espacamento()
console.log("                    Até logo")
espacamento()


// função para inseir espaçamento.
function espacamento() {
	console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
}