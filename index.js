// Code your solutions in this file


// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

// let age = 30 is the initialization, as we create a variable, age, that we'll use in the next htree phases of the loop. Notice that we use let instead of const because we need to increment the value of age. The condition for the above loop is age < 40, so "run the code in the loop until age is not less than 40". The iteration is age++ which increments the value of age by 1 after every pass through the loop. The loop body is the set of statments that we want to run when the condition evaluates true. 

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);


const names = ["Ada", "Brendan", "Ali"]


function writeCards(names, eventName) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards;
}

// while ([condition]) {
//     [loop body]
// }


//while loop 

// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   let i = 0; // the initialization moved OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }
 
//   return gifts;
// }


function countdown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

