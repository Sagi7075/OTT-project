
document.getElementById("myform").addEventListener("submit",function(event)
{
    event.preventDefault();
      const name=document.getElementById('name').value ;
      const email=document.getElementById('email').value ;
      const number=document.getElementById('number').value ;
      const pwd=document.getElementById('pwd').value ;
      const erroemessage = document.getElementById('errormassage');

      errormassage.textContent="    "
      errormassage.style.color='red';

      if(!name || !email || !number || !pwd){
        errormassage.textContent='please fill the required field';
      }
      else{
         alert("Registered succesfully");
      }
     

})
