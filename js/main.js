matriz = document.querySelector('.container');
li = matriz.querySelectorAll('.item-game');

indiceDoPlacar = document.querySelectorAll(".indice-placar");

btnReset = document.querySelector("#btn-reset");

contador = 0;
vitorias1 = 0;
vitorias2 = 0;
draw = 0;
function limpaGame(li){
    li.forEach(function(event){
        event.classList.remove('x');
        event.classList.remove('o');
   });
};
btnReset.addEventListener('click', function(){
    contador = 0;
    limpaGame(li);
    vitorias1 = 0;
    vitorias2 = 0;
    draw = 0;
    indiceDoPlacar[0].textContent = vitorias1;
    indiceDoPlacar[1].textContent = vitorias2;
});
li.forEach(function(event){
    //console.log(event.classList.value);
    event.addEventListener('click',function(){
        if(contador%2 == 0 && this.classList == 'item-game'){
            this.classList.add('x');
            draw++;
            contador++;
        }
        else if(this.classList == 'item-game'){
            this.classList.add('o');
            draw++;
            contador++;
        }
        if((li[0].classList[1] == 'x' && li[1].classList[1] == 'x' && li[2].classList[1]== 'x') || (li[3].classList[1] == 'x' && li[4].classList[1] == 'x' && li[5].classList[1] == 'x') || (li[6].classList[1] == 'x' && li[7].classList[1] == 'x' && li[8].classList[1] == 'x') || (li[0].classList[1] == 'x' && li[3].classList[1] == 'x' && li[6].classList[1] == 'x') || (li[1].classList[1] == 'x' && li[4].classList[1] == 'x' && li[7].classList[1] =='x') || (li[2].classList[1] == 'x' && li[5].classList[1] == 'x' && li[8].classList[1] == 'x') || (li[0].classList[1] == 'x' && li[4].classList[1] == 'x' && li[8].classList[1] == 'x') || (li[2].classList[1] == 'x' && li[4].classList[1] == 'x' && li[6].classList[1] == 'x')){
            vitorias1++;
            indiceDoPlacar[0].textContent = vitorias1;
            limpaGame(li);
            draw = 0;
        }
        if((li[0].classList[1] == 'o' && li[1].classList[1] == 'o' && li[2].classList[1]== 'o') || (li[3].classList[1] == 'o' && li[4].classList[1] == 'o' && li[5].classList[1] == 'o') || (li[6].classList[1] == 'o' && li[7].classList[1] == 'o' && li[8].classList[1] == 'o') || (li[0].classList[1] == 'o' && li[3].classList[1] == 'o' && li[6].classList[1] == 'o') || (li[1].classList[1] == 'o' && li[4].classList[1] == 'o' && li[7].classList[1] == 'o') || (li[2].classList[1] == 'o' && li[5].classList[1] == 'o' && li[8].classList[1] == 'o') || (li[0].classList[1] == 'o' && li[4].classList[1] == 'o' && li[8].classList[1] == 'o') || (li[2].classList[1] == 'o' && li[4].classList[1] == 'o' && li[6].classList[1] == 'o')){
            vitorias2++;
            indiceDoPlacar[1].textContent = vitorias2;
            limpaGame(li);
            draw = 0;
        }
        if(draw == 9){
            limpaGame(li);
            draw = 0;
            alert("Empate");
        }
    });
});



