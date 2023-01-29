class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      for (let i = 2; i <= 14; i++) {
        for (const suit of suits) {
          this.cards.push(new Card(i, suit));
        }
      }
    }
  
  shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal(numCards) {
      return this.cards.splice(0, numCards);
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    playCard() {
      return this.hand.shift();
    }
  }
  
  const deck = new Deck();
  deck.shuffle();
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  player1.hand = deck.deal(26);
  player2.hand = deck.deal(26);
  let player1Score = 0;
  let player2Score = 0;
  
  while (player1.hand.length > 0 && player2.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
    console.log(`${player1.name} plays ${card1.value} of ${card1.suit}`);
    console.log(`${player2.name} plays ${card2.value} of ${card2.suit}`);
  
    if (card1.value > card2.value) {
      player1Score++;
      console.log(`${player1.name} wins this round`);
    } else if (card1.value < card2.value) {
      player2Score++;
      console.log(`${player2.name} wins this round`);
    } else {
      console.log(`It's a tie!`);
    }
    console.log(`Current score: ${player1.name}: ${player1Score} - ${player2.name}: ${player2Score}\n`);
  }
  
  console.log(`All cards have been played.`);
  if (player1Score > player2Score) {
    console.log(`${player1.name} wins the game!`);
  } else {
    console.log(`${player2.name} wins the game!`);
  }