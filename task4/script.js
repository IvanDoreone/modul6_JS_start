
let text = document.querySelector('a');

text.addEventListener('click', function() {
    text = prompt(' Ведите новый текст для ссылки', 'новый текст ссылки')
    this.textContent = text; 
    event.preventDefault();
    
})