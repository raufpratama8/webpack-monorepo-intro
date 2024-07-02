const kalimat = require("./file1");
require("./style.css");

console.log(kalimat);
console.log("varel ganteng");

const newEl = document.createElement("h1");
newEl.innerHTML = kalimat;
newEl.className = "text";

document.body.appendChild(newEl);
