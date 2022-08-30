let homecount= document.getElementById("homeCount")
let guestcount= document.getElementById("guestCount")


let homecounts=0
let guestcounts=0
function add1Home(){
    
    homecounts+=1;
    homecount.textContent=homecounts;
    
}
function add2Home(){
    
    homecounts+=2;
    homecount.textContent=homecounts;
    
}
function add3Home(){
    
   homecounts+=3;
    homecount.textContent=homecounts;
    
}

function add1Guest(){
    
    guestcounts+=1;
    guestcount.textContent=guestcounts;
    
}
function add2Guest(){
    
    guestcounts+=2;
    guestcount.textContent=guestcounts;
    
}
function add3Guest(){
    
    guestcounts+=3;
    guestcount.textContent=guestcounts;
    
}

function reset(){
    
    guestcount.textContent=0;
    homecount.textContent=0;
}
