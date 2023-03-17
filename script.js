const Gameboard = (() => {
    let gameboard = ["X", "O", "O", "O", "X", "X", "O", "X", "X"]

    const display = () => {
        
        const container = document.querySelector('#container')
   
        let board = "";
        gameboard.forEach((block, index) => {
            board += `<div class="block" id=block-${index}>${block}</div>`
          
        })
        container.innerHTML = board
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

        console.log(players)
    }
    return {
        start,
    }

})()

const start = document.querySelector('#start')

start.addEventListener('click', () => {
    Controller.start();
    document.getElementById('form-container').style.display = `none`;
    document.getElementById('score').style.display = `contents`;
})
