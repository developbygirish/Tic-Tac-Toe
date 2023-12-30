let btns = document.querySelectorAll('.btn');
let playerX = true;
let playerO = false;

let winner = document.querySelector("#Winner");

let winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let resetgame = document.querySelector("#reset")


function resetGame() {
    


    btns.forEach(btn => {
        btn.disabled = false;
        btn.innerText="";
    });

    winner.innerText=""



}

resetgame.addEventListener('click', resetGame)


function disableBtn(selector) {
    selector.setAttribute("disabled", true);
}

btns.forEach(btn => {
    btn.onclick = () => {
        if (playerX) {
            btn.textContent = "X";
            playerX = false;
        }
        else {
            btn.textContent = "O";
            playerX = true;
        }
        disableBtn(btn)
        checkWinner();
       
    }
})





function printWinner(win) {
    winner.innerHTML = `Winner Winner Chicken Dinner ${win} is Winner`
}

function checkWinner() {
    for (pattern of winnerPattern) {
        // console.log(btns[pattern[0]], btns[pattern[1]], btns[pattern[2]])

        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;


        // console.log(pos1Val, pos2Val, pos3Val)

        if (pos1Val != "" && pos2Val != '' && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {              
                printWinner(pos1Val)
                btns.forEach(btn => {
                    btn.disabled = true;
                });
            }
            // else{
            //     winner.innerText="Game is Draw!!"
            // }

        }


    }
}






// console.log(pattern[0], pattern[1], pattern[2])
// console.log(btns[pattern[0]], btns[pattern[1]], btns[pattern[2]])