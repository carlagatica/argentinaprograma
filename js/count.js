let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let counter1 = 0;
let counter2 = 0;
setInterval(() => {
    if (counter1 == 100) {
        clearInterval();
    }
    else {
        counter1 += 1;
        number1.innerHTML = counter1 + "%";   
    }
}, 32) //modificar segun necesidad de duracion de la animacion
setInterval(() => {
    if (counter2 == 90) {
        clearInterval();
    }
    else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 35) //modificar segun necesidad de duracion de la animacion
