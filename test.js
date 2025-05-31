const QUOTES = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing tests are fun and help improve speed.",
  "Practice makes perfect when learning to type fast.",
  "Keep your fingers on the home row keys."
];

let timerElement = document.getElementById("timer");
let wpmElement = document.getElementById("wpm");
let accuracyElement = document.getElementById("accuracy");
let quoteDisplay = document.getElementById("quote-display");
let quoteInput = document.getElementById("quote-input");
let restartBtn = document.getElementById("restart-btn");

let startTime, timerInterval;

function getRandomQuote() {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  quoteDisplay.innerText = quote;
  quoteInput.value = "";
  timerElement.innerText = "0";
  wpmElement.innerText = "0";
  accuracyElement.innerText = "0%";
  clearInterval(timerInterval);
}

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const seconds = Math.floor((new Date() - startTime) / 1000);
    timerElement.innerText = seconds;
  }, 1000);
}

quoteInput.addEventListener("input", () => {
  const input = quoteInput.value;
  const quote = quoteDisplay.innerText;

  if (input.length === 1 && !timerInterval) {
    startTimer();
  }

  if (input === quote) {
    clearInterval(timerInterval);
    const timeTaken = (new Date() - startTime) / 1000 / 60;
    const words = quote.split(" ").length;
    const wpm = Math.round(words / timeTaken);
    wpmElement.innerText = wpm;

    const correctChars = input.split("").filter((ch, i) => ch === quote[i]).length;
    const accuracy = Math.round((correctChars / quote.length) * 100);
    accuracyElement.innerText = accuracy + "%";
  }
});

restartBtn.addEventListener("click", getRandomQuote);

// Initialize first quote
getRandomQuote();