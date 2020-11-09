document.querySelector('#btn').addEventListener('click',()=>{
    let num=parseInt(document.getElementById('num').value);
    /* Para = FOR */
    let resultado= " ";
    for (let i = 1; i <=num; i++) {
        resultado=resultado+" - " + i;
    }
    document.write(resultado);
})