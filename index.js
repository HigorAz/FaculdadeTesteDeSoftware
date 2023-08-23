const express = require("express");
const {add} = require("./calculadora");
const {dividir} = require("./calculadora");
const {mult} = require("./calculadora");
const {sub} = require("./calculadora");
const app = express();
const porta = 3000;

const rota = "/rota";
app.get(rota, (requisicao, resposta) =>{
	const result = add(2,3);
    const result2 = dividir(10,5);
    const result3 = mult(2,5);
    const result4 = sub(10,5);
	resposta.send(`A resposta do calculo de soma é ${result} ---
    A resposta do calculo da divisão é ${result2} --- 
    A resposta do calculo da multiplicação é ${result3} ---
    A resposta do calculo da subtração é ${result4}`);
});

app.listen(porta, () => {
	console.log(`Servidor Up na porta ${porta}!`);
	console.log(`localhost:${porta}${rota}`);
});