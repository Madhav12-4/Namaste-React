const heading = document.createElement("h1");
heading.id = "title";

heading.style.backgroundColor = "#F7CAC9";
heading.textContent = "Heading 1"

const heading2 = document.createElement("h2");
heading2.id = "title";
heading2.style.backgroundColor = "Crimson";
heading2.textContent = "Heading 2"

const container = document.createElement("div");
container.id = "container";

container.appendChild(heading);
container.appendChild(heading2);

const root = document.getElementById("root");
root.textContent = "";
root.appendChild(container);
