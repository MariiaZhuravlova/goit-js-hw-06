
const refs = {
    inputFontSize: document.querySelector('#font-size-control'),
    outputFontSpan: document.querySelector('#text'),
}
refs.inputFontSize.addEventListener('input', onInputChange);

function onInputChange(event){
refs.outputFontSpan.style.fontSize = `${Number(event.currentTarget.value)}px`;
}