document.write('Hello world');

teste.innerHTML = `<p></p><button id="btn">Click me</button>
                   <p class="paragrafo"'></p>`;

btn.style.background = 'red'
btn.style.border = 'none';
btn.style.padding = '6px 26px';
btn.style.color = '#FFF';

let number = 1;
let string = 'uma frase';
let boolean = true | false;

let p = document.querySelector('p')
p.innerHTML = 'Frase inserida com js';

let paragrafo = document.querySelector('.paragrafo');
paragrafo.innerHTML = 'Outro paragrafo via js <a href="#!">Meu link</a>';
paragrafo.onclick = function(){
    paragrafo.style.color = 'red';
}

let paragrafoLink = document.querySelector('.paragrafo a');
paragrafoLink.style.textDecoration = 'none';
paragrafoLink.style.color ='green';