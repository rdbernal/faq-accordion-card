const links = document.querySelectorAll("dt");

function showContent(e) {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

links.forEach((item) => {
  item.addEventListener("click", showContent);
});
