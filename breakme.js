
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};
var suits = (deal() % 13);
console.log(suits);

    if(card <= 13){
        suits = ' of Hearts'
    }else if(card >= 14  && card < 26){
        suits = ' of Diamonds'
    }else if(card >= 27 && card < 39){
    suits = ' of Clubs'
  }else if(card >= 40 && card < 52){
        suits = ' of Spades'
};



  var card1 = deal();
  var card2 = deal();



  var card3 = deal();
  var card4 = deal();


var getValue = function(card) {
  // if its a face card, number should be set to 10
  if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12){
      return 10
  }else if(card % 13 === 1){
  // What if it's an ace?
  return 11
  }else{
      return card % 13
  }

}
var player1 = function() {
  return getValue(card1) + getValue(card2)
};
var player2 = function() {
  return getValue(card3) + getValue(card4)
};
console.log("Player 1 has " + getValue(card1) + suits + " and " + getValue(card2) + suits + " for a total of "
 + player1() + " points. Player 2 has " + getValue(card3) + suits + " and " + getValue(card4) + suits + " for a total of "
+ player2());
