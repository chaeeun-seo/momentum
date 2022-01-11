// Quotes

// random background & random quotes

const quotes = [
  {
    quote: "In order to be irreplaceable one must always be different",
    author: "Gabriel Coco Chanel",
  },
  {
    quote: "Imagination is more important than knowledge",
    author: "Albert Einstein",
  },
  {
    quote:
      "Remember that there is nothing stable in human affairs; therefore avoid undeue elation inprosperity, or undue depression in adversity",
    author: "Socrates",
  },
  {
    quote:
      "The world is full of suffering but it is also full of people overcoming it",
    author: "Helen Keller",
  },
  {
    quote:
      "Surround yourself with only people who are going to lift you higher",
    author: "Oprah Winfrey",
  },
  {
    quote: "Prosperity makes friends, adversity tries them",
    author: "Pulilius Syrus",
  },
  {
    quote:
      "Most people get interested in stocks when everyone else is. The time to get interested is when no one else is. You can't buy what is popular and do well.",
    author: "Warren Buffett",
  },
  {
    quote:
      "It's not that I'm so smart, it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote:
      "What we do is less than a drop in the ocean. But if it were missing, the ocean would lack something",
    author: "Mother Teresa",
  },
  {
    quote:
      "If we all did the things we are capable of doing, we would literally astound ourselves",
    author: "Thomas A. Edison",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() : gives random number btw 0 and 1
// Math.random() * n : gives random number btw 0 and n
// Math.round() : 반올림
// Math.ceil() : 올림
// Math.floor() : 내림
// Math.floor(Math.random() * 10) : random integer number btw 1 and 10

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
