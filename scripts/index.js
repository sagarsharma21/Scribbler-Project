// Get the button for the modal
var signUpLink = document.getElementById("signUpLink");
var signUpBtn = document.getElementById("signUp");
var signInBtn = document.getElementById("signIn");

// Get the signup modal
var signUpModal = document.getElementById("modal-signUp");
var signInModal = document.getElementById("signInModal");

// Close the modal
var closeSignIn = document.getElementById("closeSignIn");
var closeSignUp = document.getElementById("closeSignUp");

// Open the modal on click
signUpBtn.addEventListener("click", () => openModal(signUpModal));
signInBtn.addEventListener("click", () => openModal(signInModal));

// Close the modal on click
closeSignIn.addEventListener("click", () => closeModal(signInModal));
closeSignUp.addEventListener("click", () => closeModal(signUpModal));

signUpLink.onclick = function() {
    closeModal(signInModal);
    openModal(signUpModal);
  };

  //Close the modal when user clicks anywhere outside the box
window.addEventListener("click", function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
});

openModal = modal => {
  modal.style.display = "block";
};

closeModal = modal => {
  modal.style.display = "none";
};