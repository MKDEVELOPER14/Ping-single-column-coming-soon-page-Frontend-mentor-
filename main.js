readyState();

function readyState(){
    document.addEventListener("readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
            appInit();
        }
        else{
            readyState();
        }
    })
}

function appInit(){
    const btn = document.getElementById("btn");
    btn.addEventListener("click",()=>{
        checkEmai();
    })
}

function checkEmai(){
    const emailText = document.getElementById("input").value;
    const errorText  = document.getElementById("error");
    const inputError = document.getElementsByClassName("input");
    // console.log(inputError);
    // console.log(emailText);
    const email = /^([a-zA-z0-9._])+\@([a-z])+\.([a-z])+$/;
    if(emailText==""){
        errorText.style.display="block"
        errorText.textContent="please enter email address";
        if(inputError[0].classList.contains("errorBorder")){
            inputError[0].classList.remove("errorBorder");
            inputError[0].classList.add("errorBorder")
        }
        else{
            inputError[0].classList.add("errorBorder");
        }
    }
    else if(!emailText.match(email)){
        errorText.style.display="block"
        if(inputError[0].classList.contains("errorBorder")){
            inputError[0].classList.remove("errorBorder");
            inputError[0].classList.add("errorBorder")
        }
        else{
            inputError[0].classList.add("errorBorder");
        }
    }
    else{
        if(inputError[0].classList.contains("errorBorder")){
            inputError[0].classList.remove("errorBorder");
            inputError[0].classList.add("correctBorder");
            errorText.style.display="none"
        }
        else{
            inputError[0].classList.add("correctBorder");
            errorText.style.display="none"
        }
    }
}