document.querySelector('#btn').addEventListener('click',()=>{
    let n = (document.getElementById('n').value);
    for (let i = 1; i<201; i++){
        document.write(i+' - '+n+'<br>')
    }
})