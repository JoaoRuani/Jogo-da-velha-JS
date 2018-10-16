tela = document.querySelector('.container');
li = tela.querySelectorAll('li');

contador = 0;

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
