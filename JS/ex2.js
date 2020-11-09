    /* todas as vezes que a informação vier de um input ela vem como se fosse uma string '1' = entre aspas  */

    document.querySelector('#btn').addEventListener('click',()=>{
    let n1,n2, total,totalsub,totalmulti,totaldiv;
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);

    total = n1+n2;
    totalsub = n1-n2
    totalmulti = n1*n2
    if(n2>0) {totaldiv = n1/n2} else {totaldiv = "Não foi possível realizar a operação"}
    
    
    alert('Resultado da adição: '+total +'\nresultado da subtração: '+totalsub+'\nResultado da multiplicação: '+totalmulti+'\nResultado da divisão: '+totaldiv);

    /* Acrescentar os cálculos de subtração (n1 - n2), multiplicação(n1*n2) e divisão (n1/n2).
    Mas tome cuidado para não deixar o usuário dividir por zero, pois é impossível.
    Mostrar os resultados no mesmo ALERT, somente quebrando a linha. */
    /* Quebra de linha no JS é \n */
})