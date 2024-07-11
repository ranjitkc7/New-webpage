const myBtn = document.getElementById("register-sec");
const myElm =  document.getElementById("form-div");
isClicked=false;

myBtn.addEventListener( "click", ()=>{
    if(!isClicked){
        myElm.style.display="flex";
    } else {
        myElm.style.display="none";
    }
});


