
let container = document.querySelector(".gridContainer");
let sketchPad = document.querySelector(".sketch-pad");
let gridButton = document.querySelector("#new-grid");
let clearButton = document.querySelector("#clear");
let colorContainer = document.querySelector("#colors");
let squares = document.querySelectorAll(".square")


gridButton.addEventListener("click", function(){
  appendNewSketchPad(appendChildToContainer(prompt("How many squares per side do you want?","100")))
})

clearButton.addEventListener("click", function(){
  let squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.style.background = "white";
  })
})



colorContainer.addEventListener("click", function(){
  let squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.addEventListener("mouseover", function(e){
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    })
  })     
})

function appendChildToContainer(num){
  const sketchPad = document.createElement("div");
  sketchPad.classList.add("sketch-pad");
  console.log(container)
  for (let i =0; i < num * num; i++){
    let newGridCreated = document.createElement("div");
    newGridCreated.classList.add("square");
    newGridCreated.style.backgroundColor = "white";
    sketchPad.appendChild(newGridCreated);
    document.documentElement.style.setProperty("--squares-per-side",num);
  }
  return sketchPad
}

function appendNewSketchPad(sketchPad) {
  container.removeChild(document.querySelector(".sketch-pad"));
  console.log(container,"")
  container.appendChild(sketchPad);
}





