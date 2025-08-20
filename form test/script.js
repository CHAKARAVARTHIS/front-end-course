// let myform = document.getElementById('form');

// myform.addEventListener("submit", (event)=>{
//   event.preventDefault();
  
  
//   let fullname = document.getElementById('name').value;
//   let mail = document.getElementById('email').value;
//   let password = document.getElementById("password").value;
//   let confirm = document.getElementById("confirm").value;
  
//   if(!fullname || !mail || !confirm){
//     alert('please fill all feild');
//   }
  
//   console.log(fullname);
//   console.log(mail);
//   console.log(confirm);
  
//   myform.reset();
// });
 
let mydata=document.getElementById('contactform');
mydata.addEventListener("submit",(event)=>{
  event.preventDefault();

  let username=document.getElementById('name');
  let email=document.getElementById('email');
  let password=document.getElementById('password');
  let confirmp=document.getElementById('confirm');

  document.querySelectorAll(".error").forEach(er=>er.textContent="");
  document.querySelectorAll(".errors").forEach(er=>er.classList.remove="error");
   let valid=true;
   if(username.value.trim()===""){
    document.getElementById("error-name").textcontent="please fill your namme";
    username.classList.add("error");
    valid=false;
   }
  if (valid) {
            const data = {
                name: username.value.trim()};
            }
})
