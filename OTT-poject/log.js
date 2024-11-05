// function clicking(){
//     alert("Login Sucessfully");
// }


// const button = document.getElementById("button1");
// button.addEventListener("click",clicking);



document.getElementById("myform").addEventListener("submit",function(event)
{
    event.preventDefault();
      const name=document.getElementById('name').value ;
     
      const pwd=document.getElementById('pwd').value ;
      const erroemessage = document.getElementById('errormassage');

      errormassage.textContent="    "
      errormassage.style.color='red';

      if(!name || !pwd){
        errormassage.textContent='please fill the required field';
      }
      else{
        window.location.href = "home.html";
      }
     

})