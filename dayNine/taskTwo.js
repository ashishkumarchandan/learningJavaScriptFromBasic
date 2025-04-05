const newdiv = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent = "Hello Bro";
newdiv.appendChild(newPara);

document.body.appendChild(newdiv);


const newUL = document.createElement("ul");
x

for (let i = 0; i < 5; i++) {
  const newLI = document.createElement("li");
  newLI.textContent = `Item ${i + 1}`;
  newUL.appendChild(newLI);
}

document.body.appendChild(newUL);