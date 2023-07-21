function startGame() {
    const playerName = prompt("What's your name?");
    if (playerName) {
      const introMessage = `Welcome, ${playerName}! Your journey begins.`;
      alert(introMessage);
      encounterGods();
    } else {
      alert("Please enter your name to start the game.");
    }
  }
  
  function encounterGods() {
    alert("You meet Zeus, the king of the gods.");
    const choice = prompt(
      "He offers you a choice: 'A' - Accept a gift of wisdom, 'B' - Challenge him to a contest."
    );
  
    if (choice.toLowerCase() === "a") {
      alert("Zeus grants you the gift of wisdom. You feel enlightened.");
      encounterHera();
    } else if (choice.toLowerCase() === "b") {
      alert("Zeus challenges you to a lightning-fast race. You lose but gain his respect.");
      encounterAthena();
    } else {
      alert("Please choose a valid option (A or B).");
      encounterGods();
    }
  }
  
  function encounterHera() {
    alert("You now encounter Hera, the queen of the gods.");
    const choice = prompt(
      "She offers you a choice: 'A' - Request protection, 'B' - Ask for guidance in leadership."
    );
  
    if (choice.toLowerCase() === "a") {
      alert("Hera grants you protection. You feel safe.");
      // Continue the story with another encounter or end the game here.
    } else if (choice.toLowerCase() === "b") {
      alert("Hera shares her wisdom in leadership with you. You feel empowered.");
      // Continue the story with another encounter or end the game here.
    } else {
      alert("Please choose a valid option (A or B).");
      encounterHera();
    }
  }
  
  function encounterAthena() {
    alert("You now encounter Athena, the goddess of wisdom.");
    const choice = prompt(
      "She offers you a choice: 'A' - Accept a gift of strategic knowledge, 'B' - Challenge her to a game of wit."
    );
  
    if (choice.toLowerCase() === "a") {
      alert("Athena grants you strategic knowledge. You feel smarter.");
      // Continue the story with another encounter or end the game here.
    } else if (choice.toLowerCase() === "b") {
      alert("Athena engages in a game of wit with you. You impress her with your intelligence.");
      // Continue the story with another encounter or end the game here.
    } else {
      alert("Please choose a valid option (A or B).");
      encounterAthena();
    }
  }
  