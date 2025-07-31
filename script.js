let randomNumber = generateRandom();

function generateRandom() {
  return Math.floor(Math.random() * 10) + 1; // 1 to 10
}

function checkGuess() {
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.textContent = "Please enter a number.";
    result.className = "error";
    setTimeout(() => {
      result.textContent= "";
      result.className = "";
  },2000);
  return;}

  const guess = parseInt(input);

  if (guess === randomNumber) {
    //document.getElementById("userInput").value = ''; // clear input
    result.style.display = "block";
    result.textContent = `🎉 Correct! The number was ${randomNumber}`;
    result.className = "correct";
    setTimeout(() => {
      result.textContent= "";
      result.className = "";
      randomNumber = generateRandom();
      result.style.display = "none";
      document.getElementById("userInput").value = ''; // clear input
      },1000);
  } else {
    //document.getElementById("userInput").value = ''; // clear input
    result.style.display = "block";
    result.textContent = `❌ Wrong! The number was ${randomNumber}`;
    result.className = "error";
  setTimeout(() => {
      result.textContent= "";
      result.className = "";
      randomNumber = generateRandom();
      result.style.display = "none";
      document.getElementById("userInput").value = ''; // clear input
      },2000);
  return;}

  

  randomNumber = generateRandom(); // regenerate for next round
  document.getElementById("userInput").value = ''; // clear input
}