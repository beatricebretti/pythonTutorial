function checkOutput(expectedOutput, event) {
    const button = event.target; 
    const textarea = button.previousElementSibling; 
    const userOutput = textarea.value.trim(); 
    const resultDiv = button.nextElementSibling; 

    if (userOutput === expectedOutput) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Try again!";
        resultDiv.style.color = "red";
    }
}
function toggleHint() {
    const hintDiv = document.getElementById('hint');
    if (hintDiv.style.display === 'none') {
        hintDiv.style.display = 'block'; // Show the hint
    } else {
        hintDiv.style.display = 'none'; // Hide the hint
    }
}
function toggleHint4() {
    const hintDiv = document.getElementById('hint4');
    if (hintDiv.style.display === 'none') {
        hintDiv.style.display = 'block'; // Show the hint
    } else {
        hintDiv.style.display = 'none'; // Hide the hint
    }
}

function toggleAnswer() {
    const answerDiv = document.getElementById('answer');
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'; // Show the answer
    } else {
        answerDiv.style.display = 'none'; // Hide the answer
    }
}
function toggleAnswer2() {
    const answerDiv = document.getElementById('answer2');
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'; // Show the answer
    } else {
        answerDiv.style.display = 'none'; // Hide the answer
    }
}
function toggleAnswer3() {
    const answerDiv = document.getElementById('answer3');
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'; // Show the answer
    } else {
        answerDiv.style.display = 'none'; // Hide the answer
    }
}
function toggleAnswer4() {
    const answerDiv = document.getElementById('answer4');
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'; // Show the answer
    } else {
        answerDiv.style.display = 'none'; // Hide the answer
    }
}

function toggleAnswer5() {
    const answerDiv = document.getElementById('answer5');
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'; // Show the answer
    } else {
        answerDiv.style.display = 'none'; // Hide the answer
    }
}

// Get all collapsible buttons
const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        // Toggle display of the content
        if (content.style.display === "block") {
            content.style.display = "none"; // Hide
        } else {
            content.style.display = "block"; // Show
        }
    });
}