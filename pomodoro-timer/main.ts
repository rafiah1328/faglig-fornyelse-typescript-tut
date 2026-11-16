
const timerDisplay = document.querySelector<HTMLDivElement>("#timer");

const startBtn = document.querySelector<HTMLButtonElement>("#startBtn");
const pauseBtn = document.querySelector<HTMLButtonElement>("#pauseBtn");
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn");

const messageDisplay = document.querySelector<HTMLParagraphElement>("#message");

// 25 minutes converted into secondss
const initialTime: number = 25 * 60;

let timeLeft: number = initialTime;
let timer: ReturnType<typeof setInterval> | null = null;

const updateDisplay = (): void => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (timerDisplay) {
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
};

// Start the countdown
function startTimer(): void {
    if (timer !== null) {
        return;
    }

    if (timeLeft === 0) {
        timeLeft = initialTime;
    }

    if (messageDisplay) {
        messageDisplay.textContent = "focus time! keep studying!";

    }

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        }

        if (timeLeft === 0) {
            pauseTimer();

            if (messageDisplay) {
                messageDisplay.textContent = "Great job! Time for a break!";
            }
        }
    }, 1000);
}

// Pause the countdown
function pauseTimer(): void {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;

        if (messageDisplay) {
            messageDisplay.textContent = "Timer paused.";
        }
    }
}

// Reset the countdown
function resetTimer(): void {
    pauseTimer();
    timeLeft = initialTime;
    updateDisplay();

    if (messageDisplay) {
        messageDisplay.textContent = "Ready to focus?";
    }
}

// connect buttons to functions 
startBtn?.addEventListener("click", startTimer);
pauseBtn?.addEventListener("click", pauseTimer);
resetBtn?.addEventListener("click", resetTimer);

updateDisplay();
