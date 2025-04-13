document
  .getElementById("keyInput")
  .addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
  });

document.getElementById("keyInput").addEventListener("keyup", function () {
  document.getElementById("displayValue").textContent = this.value;
});
