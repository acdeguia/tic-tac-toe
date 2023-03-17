const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

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
      
    
    if(checkWinner(Gameboard.getGameboard(), players[currentIndex].mark)){
      alert(`${players[currentIndex].name} won`)
      gameOver = true
    }
      currentIndex = currentIndex === 0 ? 1 : 0
  }

  const restart = () => {
    for(let i = 0; i < 9; i++){
      Gameboard.update(i, "");
    }
    Gameboard.display()
  }

  return {
    start,
    handleClick,
    restart
  };
})();


restart.addEventListener("click", () => {
  Controller.restart();
})

function checWinner(board){
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ]
      for (let i = 0; i < winningCombinations.length; i++){
      const[a, b, c] = winningCombinations[i];
      if( board[a] && board[a] === board[b] && board[a] === board[c]){
        return true;
      }
    }
    return false;
}


start.addEventListener("click", () => {
  Controller.start();
  document.getElementById("form-container").style.display = `none`;
  document.getElementById("restart").style.display = `block`;
});
