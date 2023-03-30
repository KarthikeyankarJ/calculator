let display =document.getElementsByClassName('display')[0]
let minContainer = document.getElementsByClassName('min-container')[0]
let butt = minContainer.getElementsByClassName('but')

for(i=0;i<butt.length;i++){
  let clickitem = butt[i].addEventListener('click',displayFn)

}

function displayFn(a){
  if(a.target.innerText == 'AC'){
    display.innerText='';
  }
  else if(a.target.innerText == 'DEL'){
    display.innerText = display.innerText.slice(0,-1)
    // console.log(display.innerText.slice(0,-1))
  }
  else if(a.target.innerText == '='){
    display.innerText = eval(display.innerText)
  }
  else{
    display.innerText += a.target.innerText;
  }
}