// first, we let this element "insideOfBridge" to be the layer "inside" of my illustrator image
let clickOnMe=document.getElementById("Click")

// afterwards, add an event listener to the "insideofBridge" element, where whenever it detects a click inside the "inside" layer of the bridge, it will grab the element named "textbox" and display an inner text within
clickOnMe.addEventListener("click",()=>{
  document.getElementById("textbox").innerText="Hi!Can you tell that I'm a PS5?"
})
