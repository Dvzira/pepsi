const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navList")
hamburger.addEventListener('click', function(ev){
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})
 
 const container = document.querySelector('.container')
const main = document.querySelector('main')
const blue = document.getElementById('blue')
const silver = document.getElementById('silver')
const black = document.getElementById('black')
const pepsiPrincipal = document.querySelector('.pepsiPrincipal')

silver.addEventListener('click', (ev) =>{
  if(main.dataset.theme == "blue" || main.dataset.theme == "black"){
      pepsiPrincipal.src = './img/silver_pepsi.png'
    container.style.backgroundColor = 'rgb(230, 67, 67)';
    main.dataset.theme = "silver"
  }
  
})

black.addEventListener('click', (ev) =>{
  if(main.dataset.theme == "blue" || main.dataset.theme == "silver"){
    pepsiPrincipal.src = './img/black_pepsi.png'
  container.style.backgroundColor = '#191919';
  main.dataset.theme = "black"
}
})

blue.addEventListener('click', ()=>{
  if(main.dataset.theme == "black" || main.dataset.theme == "silver"){
    pepsiPrincipal.src = './img/blue_pepsi.png'
  container.style.backgroundColor = '#0062be'
  main.dataset.theme = "blue"
}
})