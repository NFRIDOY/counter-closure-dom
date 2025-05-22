// Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to create a counter
function createCounter() {
    let count = 0;


    // function increment() {
    //     count++;
    //     countDisplay.textContent = count;
    // }

    function increment() {
        count++;
        if (count == 10) {
            countDisplay.style.color = 'red'; // Change color to red at count 10
        }
        else {
            countDisplay.style.color = 'black';
        }
        countDisplay.textContent = count;
    }

    function decrement() {
        if (count > 0) {
            count--;
            if (count < 10 || count > 10) {
                countDisplay.style.color = 'black'; // Change color to priviouse
            }
            else if (count == 10) {
                countDisplay.style.color = 'red';
            }
            countDisplay.textContent = count;
        }
        // else if (count < 10 && cou) {
        //     count--;
        //     countDisplay.textContent = count;
        //     countDisplay.style.color = 'black'; // Change color to priviouse
        // }
        else {
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
