// Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to create a counter
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        countDisplay.textContent = count;
    }

    function decrement() {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        } else {
            alert("Count cannot go below 0!");
        }
    }

    function reset() {
        count = 0;
        countDisplay.textContent = count;
    }

    // Add event listeners to the buttons
    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);
    resetBtn.addEventListener('click', reset);

    // Update the initial count display
    countDisplay.textContent = count;
}

// Call the createCounter function to set up the counter
const counter1 = createCounter();
