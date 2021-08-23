const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const winningScoreSelect = document.querySelector("#winningScoreSelect");
const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const resetButton = document.querySelector("#resetButton")

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            span1.classList.add('winner');
            span2.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        span1.textContent = p1Score;
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            span2.classList.add('winner');
            span1.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        span2.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    span2.textContent = 0;
    span1.textContent = 0;
    span1.classList.remove('winner', 'loser');
    span2.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}