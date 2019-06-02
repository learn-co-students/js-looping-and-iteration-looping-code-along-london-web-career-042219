// Code your solutions in this file
function countdown(num){
  while (num>0){
  console.log (num);
  num-=1;
  }
  return console.log(num)
  }

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
