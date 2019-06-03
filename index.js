
 function writeCards(array, string) {
  let thankYouCards = []
  for (let i = 0; i < array.length; i++)
  {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
  }
  return thankYouCards
}

function countdown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  return console.log(number)
}