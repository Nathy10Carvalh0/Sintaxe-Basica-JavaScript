//tipos primitivos 

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "nathalia";
console.log(typeof(nome));

//como declarar
var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);

const constante = 'ana';
console.log(constante);

//escopos

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoGlobal() {
    let escopoLocalInterno = 'local'; 
    console.log(escopoLocalInterno);
}

// comparação
var comparacao = '0' ==0;
console.log (comparacao);

//comparação identica
 var comparacao_identica = '0' === 0;
 console.log(comparacao_identica);
 // retornou falso pq os valores são iguais, porém um é uma string e outro é um numbe. valores iguais tipos diferentes.
 
/*operadores aritméticos
+ adição
- subtração
* multiplicação
/ divisão real (onde o restado é 0 ou quando se repete infinitamente ex.: 10/3).
% divisão inteira
** potenciação */

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2*3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 2 **10
console.log(potenciacao);

/* OPERADORES LOGICOS

&&  -> E (todos os valores são vdd)
|| -> OU (um ou outro é vdd)
! -> não (inverte o valor de vdd pra falso ou de falso pra vdd)
*/

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = ! false;
console.log(nao);
