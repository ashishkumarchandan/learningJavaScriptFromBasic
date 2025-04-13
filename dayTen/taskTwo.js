document.getElementById("hoverDiv").addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightgreen";
});

const div = document.getElementById("hoverAnotherDiv");
div.addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightgreen";
});
div.addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightblue";
});
