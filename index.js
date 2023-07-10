let homeEl= document.getElementById("home-el")
let guestEl= document.getElementById("guest-el")
let count=0
function htn1(){
count++
homeEl.textContent= count
}

function htn2(){
count+=2
homeEl.textContent= count
}

function htn3(){
count+=3
homeEl.textContent= count
}

let add=0
function gtn1(){
add++
guestEl.textContent= add
}

function gtn2(){
add+=2
guestEl.textContent= add
}

function gtn3(){
add+=3
guestEl.textContent= add
}
