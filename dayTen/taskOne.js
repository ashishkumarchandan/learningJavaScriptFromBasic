let btn = document.getElementById("randomBTN");
let text = document.getElementById("text");
// console.log(text);

btn.addEventListener("click", function () {
  text.textContent = "Text Changed";
});

document
  .getElementById("toggleImage")
  .addEventListener("dblclick", function () {
    const img = document.getElementById("toggleImage");
    img.style.visibility =
      img.style.visibility === "hidden" ? "visible" : "hidden";
  });
