
//declarations
let colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let click=document.querySelector('.click')
let color=document.querySelector('.color')
//eventlisteners
click.addEventListener('click',function(){
 let hexColors='#'
 for(let i=0;i<6;i++){
 hexColors += colors[randomNumber()]
 }
  document.body.style.backgroundColor=hexColors
  color.textContent=hexColors
})
//functions
function randomNumber() {
    return Math.floor(Math.random()*colors.length)
}