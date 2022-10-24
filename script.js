// Boton que nos guarda en localstorage las preferencias de light - dark


let darkMode = localStorage.getItem('darkMode')
const darkModeToggle =document.querySelector('#bDark')


const activarDarkMode = () =>{
    document.body.classList.add('darkmode')

    localStorage.setItem('darkMode', 'activado')
}
const desactivarDarkMode = () =>{
    document.body.classList.remove('darkmode')

    localStorage.setItem('darkMode', 'desactivado')
}
if(darkMode == 'activado'){
    activarDarkMode()
}
darkModeToggle.addEventListener('click',()=>{
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'activado'){
        activarDarkMode()
    } else{
        desactivarDarkMode()
    }
    
})



// botones principales > que nos simulan una interaccion (compra)

let mostrarInfo = document.querySelector(".btn-contratar")
let avisoContratacion = document.querySelector(".feedback")
 


// Funcion que nos despliega una alerta cuando se compra el paquete

const aviso = () =>{
    mostrarInfo.style.display = "none"
    avisoContratacion.style.display = "block"
}
mostrarInfo.addEventListener("click",aviso);

const feedback = () => {
    mostrarInfo.style.display = "block";
    mostrarInfo.style.margin= '0 auto'
    avisoContratacion.style.display = "none";
  }
  avisoContratacion.addEventListener("click", feedback)


let mostrarInfo2 = document.querySelector(".btn-contratar2")
let avisoContratacion2 = document.querySelector(".feedback2")

// Repito mis variables para tener más content
const aviso2 = () =>{
    mostrarInfo2.style.display = "none"
    avisoContratacion2.style.display = "block"
}
mostrarInfo2.addEventListener("click",aviso2);

const feedback2 = () => {
    mostrarInfo2.style.display = "block";
    mostrarInfo2.style.margin = '0 auto'
    avisoContratacion2.style.display = "none";
  }
  avisoContratacion2.addEventListener("click", feedback2)



  let mostrarInfo3 = document.querySelector(".btn-contratar3")
let avisoContratacion3 = document.querySelector(".feedback3")

const aviso3 = () =>{
    mostrarInfo3.style.display = "none"
    avisoContratacion3.style.display = "block"
}
mostrarInfo3.addEventListener("click",aviso3);

const feedback3 = () => {
    mostrarInfo3.style.display = "block";
    mostrarInfo3.style.margin = '0 auto'
    avisoContratacion3.style.display = "none";
  }
  avisoContratacion3.addEventListener("click", feedback3)


// Interaccion con el dom, nuestro evento nos lleva hasta la seccion artistas

document.querySelector("#artistas").addEventListener("click", () => {
    window.scrollTo(200, 400);
   })

  // Slider por acá y botones del slider
const slider = document.querySelector('.slider')
const btns = document.querySelectorAll('.btn')

window.addEventListener('DOMContentLoaded', init)


btns.forEach(btn =>{
  btn.onclick = ()=>{
    console.log('clicked')
    mover(btn.classList.contains('next'))
  }
})
function mover(dir){
  const actual = document.querySelector('.active')
  actual.classList.remove('active')
  const prox = actual.nextElementSibling || slider.firstElementChild
  const ante = actual.previousElementSibling || slider.lastElementChild
  const newActive = (dir) ? prox : ante
  newActive.classList.add('active')
}


// Agrego interaccion con .json

function init(){
  fetch('/artistas.json')
  .then(response => response.json())
  .then(data =>{
      adder(data)
  })
}
function adder(data){
  //Slider 
  data.forEach((item,index)=>{
      const slide = document.createElement('div');
      slide.classList.add('slide');
      const titulo = document.createElement('h2');
      titulo.textContent = item.titulo;
      titulo.style.textAlign = 'center';
      if(index==0) slide.classList.add('active');
      const div  = document.createElement('div');
      div.innerHTML = item.html;
      slide.append(titulo);
      slide.append(div);
      slide.style.backgroundColor = item.back;
      slide.style.color = item.color;
      slider.append(slide);
  })
}
