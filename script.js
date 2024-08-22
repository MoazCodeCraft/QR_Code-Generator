let mgbox=document.getElementById("imgbox");
let qrimg=document.getElementById("qrImg");
let qrtext=document.getElementById("qrText");
let input=document.querySelector(".container input");

function generateQR(){
    if(qrtext.value.length>0){
        qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
        
    }else{
        qrtext.classList.add("error");
        console.log("Error");
        setTimeout(()=>{
        qrtext.classList.remove("error");
  
        },10000)
    }

}
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    generateQR();
    input.value="";

})