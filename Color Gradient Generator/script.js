const colors = document.querySelectorAll("input");
const box = document.querySelector(".box");
const textarea = document.querySelector("textarea");
const direction = document.querySelector(".directions select");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");

function randomColorGen(){
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomColor}`;
}
 function copyColor(){
  navigator.clipboard.writeText(textarea.value);
  copy.innerText = "Copied"
  setTimeout(()=>copy.innerText = "Copy Code", 1400)
}
function changeBoxColor(isRandom) {
  if(isRandom){
    colors[0].value = randomColorGen();
    colors[1].value = randomColorGen();
}
  
  const bg = `linear-gradient(${direction.value}, ${colors[0].value}, ${colors[1].value})`;
  box.style.background = bg;
  textarea.innerText = `background: ${bg};`;
  document.body.style.background = bg;
}

colors.forEach((color)=>{
color.addEventListener("input", () => changeBoxColor(false))
})

direction.addEventListener("change",() => changeBoxColor(false));
refresh.addEventListener("click", () => changeBoxColor(true));
copy.addEventListener("click", copyColor);