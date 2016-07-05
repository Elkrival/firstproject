

//The Deck of cards
var src = document.getElementById('p1card1')
var img = document.createElement("img")


var game = document.getElementById('start')
game.addEventListener("click", function (){



// var cards = ["queen_of_clubs.png", "king_of_hearts.png", "king_of_diamonds.png",
// "king_of_clubs.png", "jack_of_hearts.png", "jack_of_spades.png", "queen_of_hearts.png",
// "jack_of_diamonds.png", "jack_of_clubs.png", "queen_of_spades.png", "king_of_spades.png",
// "queen_of_diamonds.png","10_of_clubs.png", "9_of_clubs.png", "10_of_spades.png",
// "8_of_clubs.png", "9_of_spades.png", "10_of_hearts.png", "10_of_diamonds.png",
// "8_of_spades.png","9_of_hearts.png", "9_of_diamonds.png", "ace_of_spades.png",
// "7_of_clubs.png", "8_of_hearts.png", "8_of_diamonds.png", "6_of_clubs.png", "7_of_spades.png",
// "6_of_spades.png", "5_of_clubs.png","7_of_hearts.png", "7_of_diamonds.png", "6_of_diamonds.png",
// "6_of_hearts.png", "5_of_spades.png", "5_of_hearts.png", "5_of_diamonds.png", "3_of_clubs.png",
// "4_of_clubs.png", "3_of_spades.png", "4_of_spades.png", "3_of_hearts.png", "4_of_hearts.png",
// "3_of_diamonds.png", "4_of_diamonds.png", "2_of_clubs.png", "2_of_spades.png", "2_of_hearts.png",
// "2_of_diamonds.png"]





var cards = new Array();
cards[0] = new Image();
cards[0].src = "queen_of_clubs.png",
cards[1] = new Image();
cards[1].src = "ace_of_spades.png",
cards[2] = new Image();
cards[2].src = "10_of_clubs.png",
cards[3] = new Image();
cards[3].src = "9_of_clubs.png",
cards[4] = new Image();
cards[4].src = "10_of_spades.png",
cards[5] = new Image();
cards[5].src = "8_of_clubs.png",
cards[6] = new Image();
cards[6].src = "9_of_spades.png",
cards[7] = new Image();
cards[7].src = "queen_of_hearts.png",
cards[8] = new Image();
cards[8].src = "10_of_hearts.png",
cards[9] = new Image();
cards[9].src = "10_of_diamonds.png",
cards[10] = new Image();
cards[10].src = "queen_of_spades.png",
cards[11] = new Image();
cards[11].src = "ace_of_hearts.png",
cards[12] = new Image();
cards[12].src = "8_of_spades.png",
cards[13] = new Image();
cards[13].src = "king_of_hearts.png",
cards[14] = new Image();
cards[14].src = "9_of_hearts.png",
cards[15] = new Image();
cards[15].src = "9_of_diamonds.png",
cards[16] = new Image();
cards[16].src = "ace_of_clubs.png",
cards[17] = new Image();
cards[17].src = "king_of_spades.png",
cards[18] = new Image();
cards[18].src = "jack_of_hearts.png",
cards[19] = new Image();
cards[19].src = "king_of_clubs.png",
cards[20] = new Image();
cards[20].src = "7_of_clubs.png",
cards[21] = new Image();
cards[21].src = "8_of_hearts.png",
cards[22] = new Image();
cards[22].src = "jack_of_spades.png",
cards[23] = new Image();
cards[23].src = "8_of_diamonds.png",
cards[24] = new Image();
cards[24].src = "jack_of_clubs.png",
cards[25] = new Image();
cards[25].src = "6_of_clubs.png",
cards[26] = new Image();
cards[26].src = "queen_of_diamonds.png",
cards[27] = new Image();
cards[27].src = "7_of_spades.png",
cards[28] = new Image();
cards[28].src = "6_of_spades.png",
cards[29] = new Image();
cards[29].src = "ace_of_diamonds.png",
cards[30] = new Image();
cards[30].src = "king_of_diamonds.png",
cards[31] = new Image();
cards[31].src = "5_of_clubs.png",
cards[32] = new Image();
cards[32].src = "jack_of_diamonds.png",
cards[33] = new Image();
cards[33].src = "7_of_hearts.png",
cards[34] = new Image();
cards[34].src = "7_of_diamonds.png",
cards[35] = new Image();
cards[35].src = "6_of_diamonds.png",
cards[36] = new Image();
cards[36].src = "6_of_hearts.png",
cards[37] = new Image();
cards[37].src = "5_of_spades.png",
cards[38] = new Image();
cards[38].src = "5_of_hearts.png",
cards[39] = new Image();
cards[39].src = "5_of_diamonds.png",
cards[40] = new Image();
cards[40].src = "3_of_clubs.png",
cards[41] = new Image();
cards[41].src = "4_of_clubs.png",
cards[42] = new Image();
cards[42].src = "3_of_spades.png",
cards[43] = new Image();
cards[43].src = "4_of_spades.png",
cards[44] = new Image();
cards[44].src = "3_of_hearts.png",
cards[45] = new Image();
cards[45].src = "4_of_hearts.png",
cards[46] = new Image();
cards[46].src = "3_of_diamonds.png",
cards[47] = new Image();
cards[47].src = "4_of_diamonds.png",
cards[48] = new Image();
cards[48].src = "2_of_clubs.png",
cards[49] = new Image();
cards[49].src = "2_of_spades.png",
cards[50] = new Image();
cards[50].src = "2_of_hearts.png",
cards[51] = new Image();
cards[51].src = "2_of_diamonds.png";



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

src.appendChild('img')

var playerhand1 = card1 + " " + card2;
var playerhand2 = card3 + " " + card4;
//This is how we keep score, however, Ace can only return 1 point

var pointSystem = function(card){
  if(card == "ace_of_diamonds.png" || card == "ace_of_clubs.png" || card == "ace_of_spades.png" || card == "ace_of_hearts.png"){
  return 1
}else if(card == "king_of_diamonds.png" || card == "king_of_clubs.png" || card == "king_of_spades.png" || card == "king_of_hearts.png") {
  return 10
}else if(card == "jack_of_hearts.png" || card == "jack_of_clubs.png" || card == "jack_of_diamonds.png" || card == "jack_of_spades.png") {
  return 10
}else if(card == "queen_of_hearts.png" || card == "queen_of_clubs.png" || card == "queen_of_diamonds.png" || card == "queen_of_spades.png") {
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
