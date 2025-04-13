document
  .getElementById("sampleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log("Form Data:", Object.fromEntries(formData.entries()));
    console.log("dsa");
    console.log(formData);
  });

document.getElementById("dropdown").addEventListener("change", function () {
  document.getElementById(
    "selectedValue"
  ).textContent = `Selected: ${this.value}`;
});
