var mouseevent= "empty";
var lastpositionx ;
var lastpositiony ;
canvas= document.getElementById("cannu");
ctx= canvas.getContext("2d");
color= "brown";
//  to add a event
canvas.addEventListener("mousedown",hhj);
function hhj(e) {
    color= document.getElementById("textcolor").value;
    mouseevent= "mousedown";
}
canvas.addEventListener("mousemove",wu);
function wu(e) {
    currentpositionx= e.clientX-canvas.offsetLeft;
    currentpositiony= e.clientY-canvas.offsetTop;
    console.log("x="+currentpositionx+"y="+currentpositiony);
    if (mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= 4;
        ctx.arc(currentpositionx,currentpositiony,45,0,2*Math.PI);
        ctx.arc(currentpositionx,currentpositiony,45,0,2*Math.PI)
        ctx.stroke();    
    }
    lastpositionx= currentpositionx;
    lastpositiony= currentpositiony;
     
}
canvas.addEventListener("mouseup",s);
function s(e) {
    mouseevent= "mouseup";
    
}
canvas.addEventListener("mouseleave",f)
function f(e) {
    mouseevent= "mouseleave";
    
}
function cleararea() {
ctx.clearRect(0,0,canvas.width,canvas.height)    
}