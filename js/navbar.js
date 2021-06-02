var menu = document.querySelector('.bg-navegacao');
var botao = document.querySelector('#bars');
var botao2 = document.querySelector('#fechar');

botao.addEventListener('click', function() {
    menu.classList.toggle('bg-navegacao-abrir');
});


botao2.addEventListener('click', function() {
    menu.classList.toggle('bg-navegacao-abrir');
});