// Code your solutions in this file
function writeCards(array, event) {
    new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push("Thank you, ${array[i]} for the wonderful ${event} gift")
    };

    return new_array
};

function countdown(integer) {
    let count = 0 
    while (count < integer) {
        console.log(integer--);
    };
};