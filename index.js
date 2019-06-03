// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

// build a function named writeCards() that accepts two arguments:
// an array of string names, and an event name. 
let my_array = []
function writeCards(string_names, event_name) {
  for (let i = 0; i < string_names.length; i++) {
    my_array.push(`Thank you, ${string_names[i]}, for the wonderful ${event_name} gift!`);
  }
 
  return my_array;
   //why am I returning this?  
}

// your task is to write a function, countdown:
//that takes in any positive integer and, starting from that number:
// counts down to zero using console.log()


function countdown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}