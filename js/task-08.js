const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
 
function onFormSubmit(event){

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const userEmail = formElements.email.value;
    const userPassword = formElements.password.value;
     
    if ((userEmail === "") || (userPassword === ""))
    {
        return alert(`Все поля должны быть заполнены`);
    }   
    const userData = {
        userEmail,
        userPassword,
    }
   
  console.log(`Login: ${userEmail}, Password: ${userPassword}`);
  event.currentTarget.reset();
    
}