const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
 
function onFormSubmit(event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const userEmail = formElements.email.value;
    const userPassword = formElements.password.value;
    const userData = {
        userEmail,
        userPassword,
    }
    if ((userEmail === "") || (userPassword === "")) {
        return alert(`Все поля должны быть заполнены`);
    }
    
   
    console.log(userData);
    event.currentTarget.reset();
}
