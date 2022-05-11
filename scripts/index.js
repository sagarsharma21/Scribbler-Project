
//Get the button that opens Create Post
var createPostBtn = document.getElementById("createPostBtn");

//Get the button to close the modal
var closeCreatePost = document.getElementById("createPost-close");

//Get the button that opens Create Post modal
var createPostModal = document.getElementById("createPost");


closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

createPostBtn.addEventListener("click", () => openModal(createPostModal));

//Close the modal when user clicks anywhere  outside the modal
window.addEventListener("click", function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
});