let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function updateUI() {
    counter.textContent = count;

    // Disable buttons at limits
    incrementBtn.disabled = count >= 10;
    decrementBtn.disabled = count <= 0;
}

incrementBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateUI();
    }
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateUI();
    }
});

// Initialize
updateUI();
