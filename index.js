//Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
// let age = 30 is initialization here.age<40 is the condition. age++ is the iteration.
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

let names = ["ece", "selin", "didem"];
let events = "graduation";

function writeCards(names, events) {
  const graduationCards = [];
  for (let i = 0; i < names.length; i++) {
    graduationCards.push(
      `Thank you, ${names[i]}, for the wonderful ${events} gift!`
    );
  }
  return graduationCards;
}
console.log(writeCards(names, events));

function countDown(x) {
  // let x = 0;
  while (x >= 0) {
    console.log(x);
    return countDown(x - 1);
  }
}
console.log(countDown(29));
