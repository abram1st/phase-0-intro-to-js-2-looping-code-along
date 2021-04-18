// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  } 
  
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }
  return gifts;
}
wrapGifts(gifts); 

const cards = [["Ada", "Brendan", "Ali"], "birthday"]
function writeCards(cards) {
    for (let i = 0; i < cards.length; i++)
    console.log ("Thank you, ${cards[i]} for the wonderful birthday gift!")
    

}
const countDown = ['10,9,8,7,6,5,4,3,2,1,0']
let countDown = 10; 
while (countDown > 10); {
    console.log (countDown++)
    debugger;
}
