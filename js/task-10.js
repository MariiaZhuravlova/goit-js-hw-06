    const createEl = document.querySelector('[data-create]');
    const destroyEl = document.querySelector('[data-destroy]');
    
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
  
  for (let i = 0; i < amount; i += 1) {
    globalSize += 10;
    const backgroundColorOfDiv = getRandomHexColor();
    const stringOfSettings = `<div class="boxesChild" style="background-color: ${backgroundColorOfDiv}; width: ${globalSize}px; height: ${globalSize}px;"> </div>`;
    divBox.innerHTML += stringOfSettings;
    }
    
 }

function createDivElements(event) {
  if (numberEl.value !== 0) {
    const arrayOfDiv = createBoxes(numberEl.value);
    console.log(divBox)
  }
 }

function destroyBoxes()
{
  divBox.innerHTML = '';
}

function destroyDivElements(event) {
  globalSize = 20;
  const destroyElementChild = document.querySelectorAll('.boxesChild');
  const numberOfChildren = destroyElementChild.length;
  destroyBoxes();
  
  console.log(divBox)
}
   
