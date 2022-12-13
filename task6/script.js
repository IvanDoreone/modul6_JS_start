const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');
const trafBig = document.querySelector('div');

function makeRed() {
    trafficLight3.style.background = ('red');
    trafficLight2.style.background = ('black');
    trafficLight1.style.background = ('black');
    trafBig.removeEventListener('click', makeRed);
    trafBig.addEventListener('click', makeGreen);
    //вывод в консоль функции, срабатывающей на клик
    console.log('makeRed')
}

function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLight1.style.background = ('black');
    trafficLight3.style.background = ('black');
    trafBig.removeEventListener('click', makeYellow);
    trafBig.addEventListener('click', makeRed);
    //вывод в консоль функции, срабатывающей на клик
    console.log('makYellow')
}

function makeGreen() {
    trafficLight1.style.background = ('green');
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('black');
    trafBig.removeEventListener('click', makeGreen);
    trafBig.addEventListener('click', makeYellow);
    //вывод в консоль функции, срабатывающей на клик
    console.log('makeGreen')
}
trafBig.addEventListener('click', makeGreen);



