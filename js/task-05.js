

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
const NOT_ENTERED_INPUT = 'Anonymous';

refs.input.addEventListener('input', onInputChange);

function onInputChange(event){
    refs.output.textContent = event.currentTarget.value;
    if (refs.output.textContent === ''){
        refs.output.textContent = NOT_ENTERED_INPUT;
    }
};