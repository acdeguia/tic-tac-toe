const Gameboard = (() => {
    let gameboard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

    const display = () => {
        
        const container = document.querySelector('#container')
   
        let board = "";
        gameboard.forEach((block, index) => {
            board += `<div class="block" id=block-${index}>${block}</div>`
          
        })
        container.innerHTML = board
        const blocks = document.querySelectorAll(".block")
        blocks.forEach((block) => {
          block.addEventListener("click", Controller.handleClick)
        })
    }
    return {
        display,
    }

})();

const playerFactory = (name, mark) => {
    return {
        name,
        mark, 
    }
}


const Controller = (() => {
    let players = []
    let currentIndex;
    let gameOver = false

    const start = () => {

          const playerOne = document.querySelector('#player1').value
          const playerTwo = document.querySelector('#player2').value

         players = [
            playerFactory(playerOne, "X"),
            playerFactory(playerTwo, "O")
         ]
         currentIndex = 0
         gameOver = false;
         document.querySelector(".p1").innerHTML = playerOne.toUpperCase()
         document.querySelector(".p2").innerHTML = playerTwo.toUpperCase()

         Gameboard.display()
    }

    const handleClick = (event) => {
      alert('hello')
    }

    return {
        start,
        handleClick,
    }

})()

const start = document.querySelector('#start')

start.addEventListener('click', () => {
    Controller.start();
    document.getElementById('form-container').style.display = `none`;
    document.getElementById('score').style.display = `contents`;
})
