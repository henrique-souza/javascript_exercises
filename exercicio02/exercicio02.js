/*
// CONHECENDO DECLARAÇÃO DE VARIÁVEIS
// sobre 'var':
// função com escopo
// pode ser alterado em escopo
// disponível antes da declaração

var um = 1

// sobre 'let':
// usado em laços de loops

// bloco com escopo
// pode ser alterado em escopo
// disponível somente após declaração
let dois = 2

// sobre 'const':
// usado por padrão

// bloco com escopo, como 'let'
// não pode ser alterado
// disponível somente após declaração
const tres = 3
*/

// EXEMPLO DE USO DO 'var'

var nome = 'Henrique Souza'
console.log('Meu nome é', nome)

function imprimirNome(){
    var nome = 'Bruce Souza'
    // irá chamar 'Bruce Souza'
    console.log('\nMeu nome é', nome, '\n')    
}
// irá chamar 'Henrique Souza' 
// ANTES que função 'imprimirNome()' seja chamada
console.log('\nMeu nome é', nome)

imprimirNome() 

// EXEMPLO DE USO DO 'let'


function imrpimirIdade() {
    for (let idade = 24; idade <= 34; idade++){
        console.log('Ficando mais velho: ', idade);
    }

    // neste caso, irá mostrar um erro pois 'idade'
    // NÃO está definida dentro do escopo deste 'console.log' abaixo
    /*
    console.log('Idade fora do laço for: ', idade)
    */
   console.log('\n')
}
imrpimirIdade()

//EXEMPLO DE USO DO 'const'

const henrique = {
    altura: 1.76
}

function imprimirAltura(){
    console.log(`Com a altura de: ${henrique.altura}`)
}
imprimirAltura()




