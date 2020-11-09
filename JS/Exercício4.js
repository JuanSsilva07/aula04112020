document.querySelector('#btn').addEventListener('click',()=>{
    let nome=(document.getElementById('nome').value);
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let preco=(document.getElementById('preco').value);
    let desc1=0.02;
    let desc2=0.03;
    let desc3=0.05;
    let desconto;
    let total=quantidade*preco;
    if (quantidade<=5) {
        (desconto=total*desc1);
    } else if (quantidade>5){
        (desconto=total*desc2);
    } else if (quantidade>10){
        (desconto=total*desc3);
    }

    document.write('O produto é: '+nome+ '<br>'+'Quantidade é: '+quantidade+ '<br>'+
    'Preço unitario é: '+preco+'<br>'+'Preço total sem desconto: '+total+'<br>'+'Total a pagar com o desconto é: '+(total-desconto));
    
})