//declarations
let colors=['blue','gray','green','yellow','orange','pink']
let click=document.querySelector('.click')
let color=document.querySelector('.color')
//eventlisteners
click.addEventListener('click',function(){
document.body.style.backgroundColor=colors[multipleColors()]
color.textContent=colors[multipleColors()]
})
//functions
function multipleColors(){
 return Math.floor(Math.random()*colors.length)
}