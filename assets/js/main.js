
// Timer Aufgabe 1

const timer = () => {
    let date = new Date()
    console.log(date.toLocaleTimeString())
}

let timerId = setInterval(timer, 900)



// Countdown Aufgabe 2
let counter = 10;
const feierabendCountdown = setInterval(function () {
    console.log(counter);
    counter--
    
    if (counter === 0) {
        console.log("Endlich Feierabend!!");
        clearInterval(feierabendCountdown);
    }
}, 1000);


