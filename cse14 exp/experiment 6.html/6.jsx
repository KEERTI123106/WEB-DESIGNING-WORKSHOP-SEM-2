let heading = document.getElementById("titleMain");
let input = document.getElementById("inputHeading");
let paragraph = document.getElementById("para");
let fontSize = 16;

document.getElementById("chngHeading").addEventListener("click",function(){
  if(input.value !== ""){
    heading.innerHTML = input.value;
  }
});

document.getElementById("chngbgBtn").onclick = function(){
  document.body.style.backgroundColor = "#"+ Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("incFontBtn").addEventListener("click",function(){
  fontSize += 2;
  paragraph.style.fontSize = fontSize + "px";
});

document.getElementById("hideBtn").addEventListener("click",function(){
  if(paragraph.style.display === "none"){
    paragraph.style.display = "block";
  }
  else{
    paragraph.style.display = "none";
  }
});

document.getElementById("resetBtn").addEventListener("click",function(){
  heading.innerHTML = "WELCOME TO JAVASCRIPT LAB" ;
  paragraph.style.display = "block" ; 
  paragraph.style.fontSize = "16px" ; 
  document.body.style.backgroundColor = "white" ;
  input.value = "" ;
  fontSize = 16;
});