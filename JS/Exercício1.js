document.querySelector('#btn').addEventListener('click',()=>{
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let n3=parseInt(document.getElementById('n3').value);
    let n4=parseInt(document.getElementById('n4').value);
    let resultado1,resultado2,resultado3,resultado4;

    resultado1 = Math.pow(n1,2)
    resultado2 = Math.pow(n2,2)
    resultado3 = Math.pow(n3,2)
    resultado4 = Math.pow(n4,2)

    if (resultado3>=1000) document.write('O quadrado do terceiro é: '+resultado3)
     else 
     document.write ('O quadrado de '+n1+' é igual '+resultado1+'.'+'<br>'+'O quadrado de '+n2+' é igual '+resultado2+ '.'+'<br>'+
    'O quadrado de '+n3+' é igual '+resultado3+ '.'+'<br>'+'O quadrado de '+n4+' é igual '+resultado4+'.');
})