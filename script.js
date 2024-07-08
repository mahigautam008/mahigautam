let btnl = document.querySelector(".btn");
let inputl = document.getElementById("input");

function createPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let  passwordLength = 15;
  let password = "";
  for (let index = 0; index <=      passwordLength; index++)
     {
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);  
  }
  inputl.value = password;

}   

btnl.addEventListener("click", () => {
    createPassword();
  });
     
