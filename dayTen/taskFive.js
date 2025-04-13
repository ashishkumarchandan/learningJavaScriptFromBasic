document.getElementById("itemList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

const parentDiv = document.getElementById("parentDiv");

// Event delegation for dynamically added children
parentDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("child")) {
    alert(`Clicked: ${event.target.textContent}`);
  }
});

// Dynamically add new child
document.getElementById("addChild").addEventListener("click", function () {
  const newButton = document.createElement("button");
  newButton.className = "child";
  newButton.textContent = `Child ${parentDiv.children.length + 1}`;
  parentDiv.appendChild(newButton);
});
