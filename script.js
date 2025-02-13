//your JS code here. If required.
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentStep = 1;

function updateProgress() {
  // Update the circles and lines
  for (let i = 1; i <= 5; i++) {
    const circle = document.getElementById(`circle-${i}`);
    const line = circle.nextElementSibling;
    
    if (i <= currentStep) {
      circle.classList.add("active");
      if (line) line.classList.add("active");
    } else {
      circle.classList.remove("active");
      if (line) line.classList.remove("active");
    }
  }

  // Enable/Disable buttons
  if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentStep === 5) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
  if (currentStep < 5) {
    currentStep++;
    updateProgress();
  }
});

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

// Initialize the progress bar
updateProgress();
