const changeColor = {
  input: document.querySelector('.color'),
  change: document.querySelector('.change-color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

changeColor.change.addEventListener('click', changeBackgrounrColorOfBody);

function changeBackgrounrColorOfBody(event) {
  const colorOfBody = getRandomHexColor();
  document.body.style.backgroundColor = `${colorOfBody}`;
  changeColor.change.textContent = `${colorOfBody}`;
}