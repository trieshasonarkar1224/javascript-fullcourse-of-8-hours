class Card{ 
    constructor(value, suit){ 
        this.value = value; 
        this.suit = suit; 
    } 
}

let cards = [ new Card("A", "Hearts"), 
              new Card("A", "Spades"),
              new Card("A", "Diamonds"), 
              new Card("A", "Clubs"), 
              new Card("2", "Hearts"), 
              new Card("2", "Spades"), 
              new Card("2", "Diamonds"), 
              new Card("2", "Clubs")]; 
              
console.log(cards [7].value + cards[7].suit);