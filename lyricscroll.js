$(document).ready(function(){
  function getQuote(){
    var quotes = ["I never expect to see a perfect work from an imperfect man.",
                  "A well-adjusted person is one who makes the same mistake twice without getting nervous.",
                  "There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.",
                  "The sacred rights of mankind are not to be rummaged for among old parchments or musty records. They are written, as with a sunbeam, in the whole volume of human nature, by the hand of the divinity itself; and can never be erased.",
                  "There are seasons in every country when noise and impudence pass current for worth; and in popular commotions especially, the clamors of interested and factious men are often mistaken for patriotism.",
                  "Men often oppose a thing merely because they have had no agency in planning it, or because it may have been planned by those whom they dislike.",
                  "The voice of the people has been said to be the voice of God; and, however generally this maxim has been quoted and believed, it is not true to fact.  The people are turbulent and changing, they seldom judge or determine right."];

             
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randQuote = quotes[randomNum];

    $(".daily-quote").text(randQuote);
  }

  $( document ).ready(function(){
    getQuote();
  });  
});