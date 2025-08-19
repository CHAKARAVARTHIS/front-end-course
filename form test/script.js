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
 
let mydata=document.getElementById("form");
mydata.addEventListener("submit",(event)=>{
  event.preventDefault();

  let fullname=document.getElementById('name').value;
  let mail=document.getElementById('email').values;
  let password=document.getElementById('password').values;
  let confirm=document.getElementById('confirm').values;

 
  document.querySelectorAll(".error").forEach(er=>er.textContent="");
  document.querySelectorAll(".errors").forEach(er =>er.classList.remove("error"));
})