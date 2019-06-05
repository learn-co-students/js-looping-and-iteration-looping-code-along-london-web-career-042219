//Greetings cards for loop
const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names){
    let cards = [];
    for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards
}

//Countdown while loop
function countdown(number){
    let i = number;
    while(i >= 0){
        console.log(i)
        --i
    }
}