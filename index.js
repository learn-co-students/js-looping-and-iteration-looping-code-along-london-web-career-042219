// Code your solutions in this file
function writeCards(arrayIn, giftIn) { 
 let returnArray = [];
 for(let i=0; i<arrayIn.length; i++) {
    returnArray.push(`Thank you, ${arrayIn[i]}, for the wonderful ${giftIn} gift!`);
 }
 return returnArray;
}

function countdown( numberIn ) {
    for (let i=numberIn; i>=0; i--) {
        console.log(i)
    }
}