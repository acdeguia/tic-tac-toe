const Gameboard = (() => {
    let gameboard = ["X", "O", "O", "O", "X", "X", "O", "X", "X"]

    const display = () => {
        
        const container = document.querySelector('#container')
   
        let board = "";
        gameboard.forEach((block, index) => {
        const divBlock = document.createElement('div')
            divBlock.setAttribute('id', index)
            divBlock.classList(div)
            divBlock.innerHTML = block;

            board += divBlock;
          
        })
        container.append(board)
        console.log(board)
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
    let currentIndex = 0;
    let gameOver = false

    const start = () => {
        createPlayer
    }

})()