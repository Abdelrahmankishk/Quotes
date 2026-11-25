var text = document.getElementById("quote");
var man = document.getElementById("author");
var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "”Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "”Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "Bernard M. Baruch",
  },
  {
    quote:
      "”You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "Dr. Seuss",
  },
  {
    quote: "”You only live once, but if you do it right, once is enough”",
    author: "Mae West",
  },
  {
    quote: "”If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
  {
    quote:
      "”I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author: "Maya Angelou",
  },
  {
    quote:
      "”To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "”To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "”Insanity is doing the same thing, over and over again, but expecting different results.”",
    author: "Narcotics Anonymous",
  },
  {
    quote:
      "”It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "”The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "William Shakespeare, As You Like It",
  },
  {
    quote: "”Life is what happens to us while we are making other plans.”",
    author: "Allen Saunders",
  },
  {
    quote:
      "”Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    author: "Bill Keane",
  },
  {
    quote: "”I have not failed. I've just found 10,000 ways that won't work.”",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "”It is not a lack of love, but a lack of friendship that makes unhappy marriages”",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "”The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”",
    author: "Elie Wiesel",
  },
  {
    quote:
      "”I may not have gone where I intended to go, but I think I have ended up where I needed to be.”",
    author: "douglas adams",
  },
  {
    quote:
      "”Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
    author: "Lao Tzu",
  },
  {
    quote:
      "”There is no greater agony than bearing an untold story inside you.”",
    author: "Maya Angelou, I Know Why the Caged Bird Sings",
  },
  {
    quote:
      "”The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”",
    author: "Bob Marley",
  },
  {
    quote:
      "”If I had a flower for every time I thought of you...I could walk through my garden forever.”",
    author: "Alfred Tennyson",
  },
  {
    quote: "”If you can make a woman laugh, you can make her do anything.”",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "”The difference between genius and stupidity is: genius has its limits.”",
    author: "Alexandre Dumas-fils",
  },
  {
    quote: "”Reality continues to ruin my life”",
    author: "Bill Watterson, The Complete Calvin and Hobbes",
  },
  {
    quote:
      "”The reason I talk to myself is because I’m the only one whose answers I accept”",
    author: "George Carlin",
  },
  {
    quote: "”You don’t forget the face of the person who was your last hope.”",
    author: "Suzanne Collins, The Hunger Games",
  },
  {
    quote:
      "”I've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.”",
    author: "Neil Gaiman, The Sandman, Vol. 9: The Kindly Ones",
  },
];

var generated = 0;

function newQuote() {
  var sec1 = "";
  var sec2 = "";
  var random = Math.floor(Math.random() * quotes.length);
  if (generated === random) {
    random = Math.floor(Math.random() * quotes.length);
  }
  generated = random;
  sec1 += quotes[random].quote;
  sec2 += quotes[random].author;

  text.innerHTML = sec1;
  author.innerHTML = "--" + sec2;
}
