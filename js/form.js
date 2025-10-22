const submitBtn = document.querySelector('[data-testid="test-contact-submit"');

const displayErrorAboveInput = (inputElement, errorMessage) => {
  inputElement.previousElementSibling.textContent = errorMessage;

  setInterval(() => {
    inputElement.previousElementSibling.textContent = "";
  }, 5000);
};

submitBtn.addEventListener("click", e => {
  e.preventDefault();

  const nameInput = document.querySelector('[data-testid="test-contact-name"]');

  if (nameInput.value.trim().length < 3) {
    if (nameInput.value.trim().length === 0) {
      displayErrorAboveInput(nameInput, "Full name is required!");
    } else {
      displayErrorAboveInput(
        nameInput,
        "Full name must be at least 3 characters!"
      );
    }
  }

  const emailInput = document.querySelector(
    '[data-testid="test-contact-email"]'
  );

  if (
    !emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    if (emailInput.value.trim().length === 0) {
      displayErrorAboveInput(emailInput, "Email is required!");
    } else {
      displayErrorAboveInput(emailInput, "Invalid email format!");
    }
  }

  const messageInput = document.querySelector(
    '[data-testid="test-contact-message"]'
  );

  if (messageInput.value.trim().length < 10) {
    if (messageInput.value.trim().length === 0) {
      displayErrorAboveInput(messageInput, "Message is required!");
    } else {
      displayErrorAboveInput(
        messageInput,
        "Message must be at least 10 characters!"
      );
    }
  }

  const errorElements = document.querySelectorAll(".error");
  // Check if all are empty
  const noErrors = Array.from(errorElements).every(
    el => !el.textContent.trim()
  );

  if (noErrors) {
    displayErrorAboveInput(
      nameInput.parentElement,
      "Message sent successfully to Faith Obi!"
    );

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
