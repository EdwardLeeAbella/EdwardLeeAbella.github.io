const button = document.querySelector(".heart-like-button");


button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    window.open('http://www.google.com');
  } else {
    button.classList.add("liked");
  }
});