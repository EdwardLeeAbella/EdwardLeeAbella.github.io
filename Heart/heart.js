const button = document.querySelector(".heart-like-button");


button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    window.open('https://edwardleeabella.github.io/Letter/letter.html');
  } else {
    button.classList.add("liked");
  }
});