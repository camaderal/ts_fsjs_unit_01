/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `interval` of milliseconds to call printQuote()
***/
const interval = 10000;

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016",
    tags: [
      "technology",
      "motivational"
    ]
  },
  {
    quote: "Change, when it comes, cracks everything open.",
    source: "Dorothy Allison",
    citation: "O Magazine",
    year: "2004"
  },
  {
    quote: "To know the road ahead, ask those coming back.",
    source: "Anonymous",
    citation: "A Chinese proverb",
    tags: [
      "proverbs"
    ]
  },
  {
    quote: "Laugh and the world laughs with you, snore and you sleep alone.",
    source: "Anthony Burgess",
    year: "1917"
  },
  {
    quote: "In the first place, God made idiots. That was for practice. Then he made school boards.",
    source: "Mark Twain",
    year: "1938"
  },
  {
    quote: "If the facts don't fit the theory, change the facts.",
    source: "Albert Einstein"
  },
  {
    quote: "Acts of sacrifice and decency without regard to what's in it for you create ripple effects. Ones that lift up families and communities, that spread opportunity and boost our economy.",
    source: "Barack Obama",
    citation: "Arizona State Commencement Speech",
    year: "2009",
    tags: [
      "politics"
    ]
  },
  {
    quote: "Do not meddle in the affairs of wizards, for they are subtle and quick to anger.",
    source: "J. R. R. Tolkien",
    tags: [
      "books",
      "fantasy"
    ]
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    source: "J. R. R. Tolkien",
    citation: "The Fellowship of the Ring"
  },
  {
    quote: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
    source: "Steve Jobs",
    citation: "Business Week",
    year: "1998",
    tags: [
      "business"
    ]
  }
]

// calls printQuote() every set interval of milliseconds
setInterval(printQuote, interval);

/***
 * `getRandomRGB` function
 * 
 * @returns random RGB hexadecimal
***/
function getRandomRGB() {
  var hex = Math.floor(Math.random()*256).toString(16); // get random number from 0-255 and convert it to hexadecimal
  return ("0"+String(hex)).substr(-2); // pad with zero
}

/***
 * `getRandomColor` function
 * 
 * @returns random color
***/
function getRandomColor() {
  return "#"+getRandomRGB()+getRandomRGB()+getRandomRGB();
}

/***
 * `getRandomQuote` function
 * 
 * @returns random quote object from the quotes array
***/
function getRandomQuote(){
  // generate random index from 0 to length of quote array.
  let quoteIndex = Math.floor(Math.random() * quotes.length); 
  return quotes[quoteIndex];
}

/***
 * `printQuote` function
 * Prints a random quote to the screen.
 * Changes background color.
 * 
***/
function printQuote(){
  let quote = getRandomQuote();
  let message = "";

  message += `<p class="quote"> ${quote.quote} </p>`;
  message += `<p class="source"> ${quote.source}`;

  if(quote.citation ){
    message += `<span class="citation"> ${quote.citation} </span>`;
  }
  
  if(quote.year){
    message += `<span class="year"> ${quote.year} </span>`;
  }
  message += `</p>`;
 
  if(quote.tags && quote.tags.length > 0){
    message += `<p class="tags"> #${quote.tags.join(", #")} </p>`;
  }
 
  document.getElementById("quote-box").innerHTML = message;
  document.body.style.backgroundColor = getRandomColor();

}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);