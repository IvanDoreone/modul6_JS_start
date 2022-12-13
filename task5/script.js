let inputText = document.querySelector('input');
let dupleText = document.querySelector('#duplicateField');
inputText.addEventListener('keyup', function() {
    dupleText.textContent = inputText.value;
})   
document.querySelector('button').addEventListener('click', function() {
    console.log(inputText.value);
    inputText.value = '';
    dupleText.textContent = ''
})
