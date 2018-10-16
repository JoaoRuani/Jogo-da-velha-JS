tela = document.querySelector('.container');
li = tela.querySelectorAll('.item-game');

contador = 0;
console.log(li);
li.forEach(function(event){
    //console.log(event.classList.value);
    event.addEventListener('click',function(){
        contador++;
        if(contador%2 == 0)
            this.classList.add('x');
        else
            this.classList.add('o');
    });
});
