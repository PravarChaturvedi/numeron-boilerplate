// Iteration 2: Generate 2 random number and display it on the screen
document.addEventListener("DOMContentLoaded", function() {
    // Get the number elements
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
  
    // Generate random numbers
    const number1 = Math.floor(Math.random() * 100); // Change 100 to set the range of random numbers
    const number2 = Math.floor(Math.random() * 100); // Change 100 to set the range of random numbers
  
    // Display the generated numbers
    number1Element.textContent = number1;
    number2Element.textContent = number2;
  });
  

// Iteration 3: Make the options button functional
document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements
    const greaterThanButton = document.getElementById("greater-than");
    const equalToButton = document.getElementById("equal-to");
    const lesserThanButton = document.getElementById("lesser-than");
  
    // Add click event listeners to the buttons
    greaterThanButton.addEventListener("click", function() {
      checkRelation("greater");
    });
  
    equalToButton.addEventListener("click", function() {
      checkRelation("equal");
    });
  
    lesserThanButton.addEventListener("click", function() {
      checkRelation("lesser");
    });
  
    // Function to check the relation between the numbers
    function checkRelation(relation) {
      // Get the numbers from the screen
      const number1 = parseInt(document.getElementById("number1").textContent);
      const number2 = parseInt(document.getElementById("number2").textContent);
  
      // Compare the numbers based on the relation
      if (relation === "greater") {
        if (number1 > number2) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
      } else if (relation === "equal") {
        if (number1 === number2) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
      } else if (relation === "lesser") {
        if (number1 < number2) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
      }
    }
  });
  

// Iteration 4: Build a timer for the game
document.addEventListener("DOMContentLoaded", function() {
    // Get the timer element
    const timerElement = document.getElementById("timer");
  
    // Set the initial time
    let timeLeft = 60; // Change 60 to set the duration of the timer in seconds
  
    // Update the timer every second
    const timerInterval = setInterval(function() {
      if (timeLeft > 0) {
        timerElement.textContent = `Time Left: ${timeLeft} seconds`;
        timeLeft--;
      } else {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
        // You can add your logic for what to do when the time is up
      }
    }, 1000); // Update every second (1000 milliseconds)
  });
  