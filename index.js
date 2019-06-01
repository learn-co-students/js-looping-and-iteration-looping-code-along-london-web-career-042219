// Code your solutions in this file
const arr2 = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
        arr2.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    } 
    return arr2
}


function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }

}