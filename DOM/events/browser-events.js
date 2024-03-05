// function func(){
//   console.log('clicked btn');
// }

// document.querySelector('#one').onclick = function() {
//   alert('clicked one li')
// }

// document.querySelector('#one').addEventListener('click', function(){
//   // console.log('clicked one');
// }, false)

// type, timestamp, preventDefault
// target, toElement, srcElement, currentTraget,
// clientX, clientY, screenX,screenY
// altkey, clrkey, shiftkey, keycode

// document.querySelector('ul').addEventListener('click', function(){
//   console.log('clicked inside the ul');
// }, false) // true

// document.querySelector('#two').addEventListener('click', function(e){
//   console.log('clicked two');
//   e.stopPropagation()
// }, false) // true


document.getElementById('divs').addEventListener('click', function(e){
  console.log(e.target.tagName);
  if(e.target.id === 'divs'){
    console.log(e.target.id);
    let removeIt = e.target.id
    removeIt.remove()
  }
}) 
// removeIt.parentNode.removeChild(removeIt)
