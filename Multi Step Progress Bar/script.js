const steps = document.querySelectorAll('.step');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
let currentStep = 0;

updateButtons();

function updateButtons() {
  if (currentStep === 0) {
    previousBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }

  if (currentStep === steps.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function updateSteps() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

previousBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateButtons();
    updateSteps();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateButtons();
    updateSteps();
  }
});
