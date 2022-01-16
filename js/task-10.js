    const createEl = document.querySelector('[data-create]');
    const destroyEl = document.querySelector('[data-destroy]');
    const destroyElementChild = document.querySelectorAll('.boxesChild');
    const numberEl = document.querySelector('input');
    const divBox = document.querySelector('#boxes');
    
    numberEl.value = 0;
    const arrayOfBoxes = [];
    let globalSize = 20;

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createEl.addEventListener('click', createDivElements);
destroyEl.addEventListener('click', destroyDivElements);

function createBoxes(amount) {
    console.log(numberEl.value);
     for (let i= 0; i < amount; i += 1){
     const divEl = document.createElement('div');
       divEl.classList = "boxesChild";
       globalSize += 10;
       divEl.style.width = globalSize + 'px';
       divEl.style.height = globalSize + 'px';
       divEl.style.backgroundColor = getRandomHexColor();
     arrayOfBoxes.push(divEl);
     console.log(`divBox`, divBox);
   }
  return arrayOfBoxes;
 }

function createDivElements(event) {
  if (numberEl.value !== 0) {
    const arrayOfDiv = createBoxes(numberEl.value);
    divBox.append(...arrayOfDiv);
  }
  
}

function destroyBoxes(){
  destroyElementChild.forEach(element => {
    return element.remove();})
  
}

function destroyDivElements(event) {
  globalSize = 20;
  destroyBoxes();
}
   
