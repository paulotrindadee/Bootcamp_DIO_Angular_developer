/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoCombustivel = 5.64
// Preço do combutível

const KmPorLitros = 11
// Consumo médio km por litro

const distanciaEmKm = 1800
//Distância em km da viagem

const LitrosConsumidos = distanciaEmKm / KmPorLitros
// Aqui é a divisão da distancia percorrida por km por litros gastos
const valorGasto = LitrosConsumidos * precoCombustivel
// Aqui é o valor gasto da viagem onde existe a mutiplicação dos litros consumidos pelo carro e o valor do combustível 
console.log(valorGasto.toFixed(2))
