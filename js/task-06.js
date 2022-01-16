

const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('blur', onInputBlur);

function onInputBlur(event){
if (event.currentTarget.value.length !== 0){
    (event.currentTarget.value.length === Number(inputValidation.dataset.length))?
    inputValidation.className = "valid":inputValidation.className = "invalid";
}
else inputValidation.className = '';
return inputValidation.classList.value;
    
};