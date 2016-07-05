

//The Deck of cards

var game = document.getElementById('start')
game.addEventListener("click", function (){



var cards = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D',
'7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AC', '1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC',
'KC', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS']
//Shuffling the deck, and removing cards and handing them to players
 var dealer = function(start) {
   var deal = Math.floor(Math.random()* cards.length)
   var card = cards.splice(deal, 1);
   return card
}
//The first deal is two cards per player
var card1 = dealer();
var card2 = dealer();
var card3 = dealer();
var card4 = dealer();

console.log(card1);
console.log(card2);
console.log(card3);
console.log(card4);
console.log(cards);

var playerhand1 = card1 + " " + card2;
var playerhand2 = card3 + " " + card4;
//This is how we keep score, however, Ace can only return 1 point

var pointSystem = function(card){
  if(card == 'AH' || card == 'AD' || card == 'AC' || card == 'AS'){
  return 1
}else if(card == 'KH' || card == 'KD' || card == 'KC' || card == 'KS') {
  return 10
}else if(card == 'JH' || card == 'JD' || card == 'JC' || card == 'JS') {
  return 10
}else if(card == 'QH' || card == 'QD' || card == 'QC' || card == 'QS') {
  return 10
}else {
  return parseInt(card)
}
};
//Using the point system, we combine card values for each player
var p1points = pointSystem(card1) + pointSystem(card2)

var p2points = pointSystem(card3) + pointSystem(card4);

alert("P1 has " + playerhand1 + " and player2 has " + playerhand2 + " the totals are " + p1points + " " + p2points);


if (p1points > p2points){
    alert('player1 wins')
  }else if(p2points > p1points){
    alert('player2 wins')
    }else{
      alert('tie')
    }
});
