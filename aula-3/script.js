//O que são vetores e arrays
/*
// como declarar um array
let array = ['string', 1, true];
console.log(array);
*/
//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]);
/*
//forEach forEach() – itera um array;
array.forEach(function(item, index){console.log(item, index)});*/
/*
//push() – add item no final do array
array.push('novo item');
console.log(array)*/
/*
//pop() – remove item no final do array;
array.pop();
console.log(array);*/
/*
//shift() – remove item no início do array
array.shift();
console.log(array);
*/
/*
// unshift() – add item no início do array;
array.unshift('novo item no inicio');
console.log(array);
*/

/*
// indexOf() – retorna o índice de um valor;
console.log(array.indexOf(true));
*/

/*
// splice() – remove ou substitui um item pelo índice;
array.splice(0, 3);
console.log(array);
*/

/*
// slice() – retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray);
*/

//OBJETOS
let object = {string:'string', number: 1, Boolean: true, array: ['array'], ObjectInterno: {ObjectInterno: 'objeto interno'}};

console.log(object);

//acessando apenas uma propriedade

console.log(object.array);

//desestruturação do objeto
var string = object.string;
console.log(string);

var number = object.number
console.log(number);

var {string, Boolean, ObjectInterno} = object;
console.log(string, Boolean, ObjectInterno);