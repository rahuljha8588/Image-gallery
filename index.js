let box = document.querySelectorAll(".box");

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", function () {
    this.classList.add("extra");
this.innerHTML = "";
});
  box[i].addEventListener("mouseleave", function () {
    this.classList.remove("extra");
    this.innerHTML = `<div class="small"></div>`;
  });
}
