const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const restart = document.createElement('button')

  const display = () => {
    const container = document.querySelector("#container");

    let board = "";
    gameboard.forEach((block, index) => {
      board += `<div class="block" id=block-${index}>${block}</div>`;
    });
    container.innerHTML = board;
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
      block.addEventListener("click", Controller.handleClick);
    });
  };

  const update = (index, value) => {
    gameboard[index] = value;
    display();
  };


  const getGameboard = ()  => gameboard;

  return {
    display,
    update,
    getGameboard,
  };
})();

const playerFactory = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Controller = (() => {
  let players = [];
  let currentIndex;
  let gameOver = false;

  const start = () => {
    const playerOne = document.querySelector("#player1").value;
    const playerTwo = document.querySelector("#player2").value;

    players = [playerFactory(playerOne, "X"), playerFactory(playerTwo, "O")];
    currentIndex = 0;
    gameOver = false;

    if (playerOne == "") {
      document.querySelector(".p1").innerHTML = "PLAYER 1";
    } else {
      document.querySelector(".p1").innerHTML = playerOne.toUpperCase();
    }

    if (playerTwo == "") {
      document.querySelector(".p2").innerHTML = "PLAYER 2";
    } else {
      document.querySelector(".p2").innerHTML = playerTwo.toUpperCase();
    }
    Gameboard.display();

    
  };

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    if(Gameboard.getGameboard() [index] !== "")
    return
    
      Gameboard.update(index, players[currentIndex].mark);
      currentIndex = currentIndex === 0 ? 1 : 0
    
  };

  return {
    start,
    handleClick,
  };
})();

const start = document.querySelector("#start");

start.addEventListener("click", () => {
  Controller.start();
  document.getElementById("form-container").style.display = `none`;
  document.getElementById("restart").style.display = `block`;
});
