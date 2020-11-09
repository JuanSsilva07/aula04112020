document.querySelector('#btnpar').addEventListener('click',()=>{
    let num=parseInt(document.getElementById('num').value);
    let resto;
/* Dividir o número por dois e criar uma variável de memória resto */
    resto= num%2
    if(resto==0) 
    alert('O número é Par!')
    else
    alert('O número é Ímpar!');
})
/* ------------------------------------OUTRA FUNÇÃO-------------------------------------------- */
document.querySelector('#btnano').addEventListener('click',()=>{
    let ano=parseInt(document.getElementById('ano').value);
    let resto;

    resto = ano%4
    if(resto==0)
    alert ('O ano é Bissexto!')
    else
    alert ('O ano não é Bissexto.');
})