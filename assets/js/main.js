document.querySelector(".submit").addEventListener("click" , ()=>{
let username = document.querySelector(".username").value;
let email = document.querySelector(".email").value;
let password = document.querySelector(".password").value;
let passwordagain = document.querySelector(".passwordagain").value;
let errorMesage = document.querySelector(".error");

if(password.length <= 8){
    errorMesage.style.color="red";
    errorMesage.innerHTML="minimum 8 simvol";
}else{
    if(password!=passwordagain){
        errorMesage.innerHTML="sifreler  eyni deyil";
        errorMesage.style.color="red";
    }else{
        errorMesage.innerHTML="";
        let data ={
            username,
            email,
            password,
            passwordagain,
        }
        console.log(data);

        username = document.querySelector(".username").value="";
        email = document.querySelector(".email").value="";
        password = document.querySelector(".password").value="";
        passwordagain = document.querySelector(".passwordagain").value="";
        errorMesage = document.querySelector(".error").value="";
    }
}

})

//butun eyni id-li inputlara tesir eden func.

let allinput= document.querySelectorAll("#input");
 for (let i=0; i<input.length;i++){
    allinput[i].addEventListener("keyup",()=>{
        let allinput= document.querySelectorAll("#input");
        if(allinput[i].value.length>8){
            allinput[i].style.border="1px solid green";
        }
         else if(allinput[i].value.length == 0){
            allinput[i].style.border="1px solid gray"; 
        }
        else {
            allinput[i].style.border="1px solid red";
        } 
    }) 
 }

// btn a enterle klik olanda islesin
document.body.addEventListener("keyup" , (event)=>{
        sendData(event);
})
function sendData (event){
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let passwordagain = document.querySelector(".passwordagain").value;
 
    const data ={
        username,
        email,
        password,
        passwordagain,
    }
    if(event.which==13){
        
       
    }
}

