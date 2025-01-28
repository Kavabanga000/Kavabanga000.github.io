const bird = document.getElementById('bird');
const gameContainer = document.querySelector('.game-container');
const scoreDisplay = document.getElementById('score');

let birdY = 300;
let gravity = 2;
let isGameOver = false;
let score = 0;

document.addEventListener('keydown', () => {
    if (!isGameOver) {
        birdY -= 40; // прыжок
        bird.style.bottom = birdY + 'px';
    }
});

function createPipe() {
    const pipe = document.createElement('div');
    pipe.classList.add('pipe');
    const pipeHeight = Math.random() * (gameContainer.offsetHeight - 150) + 50;
    pipe.style.height = pipeHeight + 'px';
    pipe.style.left = gameContainer.offsetWidth + 'px';
    gameContainer.appendChild(pipe);
    movePipe(pipe);
}

function movePipe(pipe) {
    let pipeX = gameContainer.offsetWidth;

    const pipeInterval = setInterval(() => {
        if (isGameOver) {
            clearInterval(pipeInterval);
            return;
        }

        pipeX -= 5; // скорость движения трубы
        pipe.style.left = pipeX + 'px';

        // Проверка на столкновение
        if (pipeX < 60 && pipeX > 10 && (birdY < parseFloat(pipe.style.height) || birdY > parseFloat(pipe.style.height) + 100)) {
            clearInterval(pipeInterval);
            isGameOver = true;
            alert('Игра окончена! Ваш счет: ' + score);
        }

        if (pipeX < 0) {
            clearInterval(pipeInterval);
            pipe.remove();
            score++;
            scoreDisplay.innerText = score;
        }
    }, 20);
}

setInterval(() => {
    if (!isGameOver) {
        birdY += gravity; // гравитация
        bird.style.bottom = birdY + 'px';
    }
}, 20);

setInterval(createPipe, 2000);
