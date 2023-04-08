function escrevendoLetras(){
  function ativaLetra(elemento){
  const arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  arrTexto.forEach((letra, i)=>{
      setTimeout(()=>{
          elemento.innerHTML += letra
      }, 75 * i)
  })
}

const titulo = document.querySelector('.digitando');

ativaLetra(titulo);
}

escrevendoLetras();


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');


ativaMenu.addEventListener('click', ()=>{
  ativaMenu.classList.toggle('fa-x');
  navMenu.classList.toggle('ativado')
})



const h1 = document.querySelector('h1');
let troca = false;

setInterval(() => {
  troca = !troca;
  if (troca) {
    h1.innerHTML = 'Schottz <span>Geslon</span>';
  } else {
    h1.innerHTML = 'Geslon <span>Schottz</span>';
  }
}, 2000);









