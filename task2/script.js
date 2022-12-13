document.querySelector('#consoleLog').addEventListener('click', function() {
    alert('метод для выведения сообщений в вэб консоль');
    console.log('пример console.log');
})
document.querySelector('#alert').addEventListener('click', function() {
    alert('это пример alert');
})
document.querySelector('#prompt').addEventListener('click', function() {
    let varSmth = prompt('пример метода prompt, введите что-то ниже:', 'что-то');
    console.log(varSmth);
})
