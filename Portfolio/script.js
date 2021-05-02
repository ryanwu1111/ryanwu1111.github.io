// Defining home page links & images
let homeAboutMe=document.getElementById("home-about-me")
let homeMyWorks=document.getElementById("home-my-works")
let homeContact=document.getElementById("home-contact")
let homeMeImage=document.getElementById("me-image")
let homeWorksImage=document.getElementById("work-image")
let homeContactImage=document.getElementById("contact-image")

// When mouse hovers or enters the links on the home page, the background color changes//
homeAboutMe.addEventListener('mouseenter',()=>{
  document.body.style.backgroundColor = "orange";
})
homeAboutMe.addEventListener('mouseleave',()=>{
  document.body.style.backgroundColor = "white";
})

homeMyWorks.addEventListener('mouseenter',()=>{
  document.body.style.backgroundColor = "orange";
})

homeMyWorks.addEventListener('mouseleave',()=>{
  document.body.style.backgroundColor = "white";
})

homeContact.addEventListener('mouseenter',()=>{
  document.body.style.backgroundColor = "orange";
})
homeContact.addEventListener('mouseleave',()=>{
  document.body.style.backgroundColor = "white";
})
