// var name1 = prompt("What's the first players name");
//   document.getElementById('player1').innerHTML = name1
//
//   var name2 = prompt("What's the second player's name");
//   document.getElementById('player2').innerHTML = name2

  var score = 0;
  var score2 = 0;






//The Deck of cards

var game = document.getElementById('start')
game.addEventListener("click", function (){


  var name1 = prompt("What's the first players name");
    document.getElementById('player1').innerHTML = name1

    var name2 = prompt("What's the second player's name");
    document.getElementById('player2').innerHTML = name2



var cards = ["queen_of_clubs.png", "king_of_hearts.png", "king_of_diamonds.png",
"king_of_clubs.png", "jack_of_hearts.png", "jack_of_spades.png", "queen_of_hearts.png",
"jack_of_diamonds.png", "jack_of_clubs.png", "queen_of_spades.png", "king_of_spades.png",
"queen_of_diamonds.png","10_of_clubs.png", "9_of_clubs.png", "10_of_spades.png",
"8_of_clubs.png", "9_of_spades.png", "10_of_hearts.png", "10_of_diamonds.png",
"8_of_spades.png","9_of_hearts.png", "9_of_diamonds.png", "ace_of_spades.png",
"7_of_clubs.png", "8_of_hearts.png", "8_of_diamonds.png", "6_of_clubs.png", "7_of_spades.png",
"6_of_spades.png", "5_of_clubs.png","7_of_hearts.png", "7_of_diamonds.png", "6_of_diamonds.png",
"6_of_hearts.png", "5_of_spades.png", "5_of_hearts.png", "5_of_diamonds.png", "3_of_clubs.png",
"4_of_clubs.png", "3_of_spades.png", "4_of_spades.png", "3_of_hearts.png", "4_of_hearts.png",
"3_of_diamonds.png", "4_of_diamonds.png", "2_of_clubs.png", "2_of_spades.png", "2_of_hearts.png",
"2_of_diamonds.png"]





//Anthony Koury video explained this method of .splice of an array
//Shuffling the deck, and removing cards and handing them to players
 var dealer = function(start) {
   var deal = Math.floor(Math.random()* cards.length)
   var card = cards.splice(deal, 1);
   return card
}

//Met with Liza and she explained the image change method
//The first deal is two cards per player
          var card1 = dealer();
          var shuffle1 = document.getElementById('p1card1');
          console.log(shuffle1);
          shuffle1.setAttribute('src', card1);
          console.log(shuffle1);

          var card2 = dealer();
          var shuffle2 = document.getElementById('p1card2');
          console.log(shuffle2);
          shuffle2.setAttribute('src', card2);
          console.log(shuffle2);

          var card3 = dealer();
          var shuffle3 = document.getElementById('p2card3');
          console.log(shuffle3);
          shuffle3.setAttribute('src', card3);
          console.log(shuffle3);

          var card4 = dealer();
          var shuffle4 = document.getElementById('p2card4');
          console.log(shuffle4);
          shuffle4.setAttribute('src', card4);
          console.log(shuffle4);

            console.log(card1);
            console.log(card2);
            console.log(card3);
            console.log(card4);
            console.log(cards);

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

            alert(name1 +" has " + playerhand1 + " and "+ name2 + " has " + playerhand2 + " the totals are " + p1points + " " + p2points);


            if (p1points > p2points){
                alert(name1 +  ' wins')
                score = score + 1
                return score
              }else if(p2points > p1points){
                alert(name2 + ' wins')
                score2 = score2 + 1
                return score2
                }else{
                  alert('tie')
                }
            });
