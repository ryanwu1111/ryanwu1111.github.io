let interactable1 = document.getElementById("interactable1")
let sound= document.getElementById("sound")

interactable1.addEventListener('mouseenter',()=>{
  sound.play();
})

interactable1.addEventListener('mouseleave',()=>{
  sound.pause();
})

interactable2.addEventListener("mouseenter",()=>{
  sound2.play();
})

interactable2.addEventListener("mouseleave",()=>{
  sound2.pause();
})

sound.addEventListener('play', () => {
  document.body.style.backgroundColor = "orange";
})

sound.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

sound2.addEventListener('play', () => {
  document.body.style.backgroundColor = "orange";
})

sound2.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})
