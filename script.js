function getComputerChoice() {
    const randomStr = Math.floor(Math.random() * 3);
    if (randomStr == 0) {
      return "Ножница";
    } else if (randomStr == 1) {
      return "Камень";
    } else {
      return "Бумага";
    }
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
      (playerSelection === "ножница" && computerSelection === "бумага") ||
      (playerSelection === "камень" && computerSelection === "ножница") ||
      (playerSelection === "бумага" && computerSelection === "камень")
    ) {
      return (
        "Вы выиграли!" +
        " " +
        playerSelection +
        " побеждает " +
        computerSelection
      );
    }

    if (
      (playerSelection === "бумага" && computerSelection === "ножница") ||
      (playerSelection === "ножница" && computerSelection === "камень") ||
      (playerSelection === "камень" && computerSelection === "бумага")
    ) {
      return (
        "Вы проиграли!" +
        " " +
        computerSelection +
        " побеждает " +
        playerSelection
      );
    }

    if (playerSelection === computerSelection) {
      return "Ничья!";
    } else {
      return "Не допускайте ошибок!!!";
    }
  }
  let playerSelection = prompt("Выберите: КАМЕНЬ, НОЖНИЦЫ, БУМАГА");
  const computerSelection = getComputerChoice();

  function game() {
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("");

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("");

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("");

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("");

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("");
    
  }

  game();
