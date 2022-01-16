const counter = {
    counterValue: 0,
    increment(){
        this.counterValue += 1;
    },
    decrement(){
        this.counterValue -= 1;
       },
}
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});
incrementButton.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});