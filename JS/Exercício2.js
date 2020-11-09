document.querySelector('#btn').addEventListener('click',()=>{
    let n=parseInt(document.getElementById('n').value);
    for (let i = 1 ; i <11 ; i++) {
        document.write(n+' x '+ i +' = '+ (n*i)+'<br>')
    }
})