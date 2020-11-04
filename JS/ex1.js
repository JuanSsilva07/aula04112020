/* comentário de bloco */
/* function xxx (){
    corpo da função, todos os comandos do js
} */
/* arrow function: () =>{} */

document.querySelector('#botao').addEventListener('keydown',()=>{ /* Neste momento o JS vai pegar o nome digitado
e armazenar numa variável de memória - Porção da memória RAM */
    
    let nome; /* declaração da variável de memória nome */
    
    nome = document.getElementById('nome').value; /* Atribuindo o nome digitado para a variável nome */
    /* Imprimir: O nome digitado é: Juan */
    let sobrenome=document.getElementById('sobrenome').value;
    /* Juntar = CONCATENAR  */
    document.write('O nome digitado é '+nome+' '+sobrenome);
})  


/* Criar um evento para escutar o botão */
document.querySelector('#botao').addEventListener('click',()=>{
    /* Corpo da função */
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    /* Cubo rosa = Método = Vai fazer alguma ação */ 
    /* Juntar é igual a concatenar */
    alert('O nome digitado é '+nome+' '+sobrenome);
})