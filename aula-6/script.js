// tipos de função

//declarativas
function funcao(){
    console.log("sou uma mensagem de uma função declarativa")
}

funcao();

//Expressoes de função - quando uma função está atribuida a uma variavél, e o javascript já atribui o nome da variavél a função

var fusa1 = function (){
    console.log('sou uma mensagem de função de expressão!')
}

fusa1();

//arrow funticion 
//São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas.

var fusao = () =>{
    console.log('sou um arrow function!');
}

fusao();

//funções aritimeticas
