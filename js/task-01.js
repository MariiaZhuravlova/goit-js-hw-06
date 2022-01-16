const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
console.log(allCategoriesEl);
const numberOfCategoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

allCategoriesEl.forEach(function(element)
{
    const textHeaderEl = element.firstElementChild.textContent;
     console.log(`Category: ${textHeaderEl}`);
     const elementsEl = element.lastElementChild;
     const numbersOfElementsEl = elementsEl.querySelectorAll('li')
     console.log(`Elements: ${numbersOfElementsEl.length}`);

});

