document.addEventListener("DOMContentLoaded", () => {
  const gran = document.createElement("div");
  gran.id = "gran";
  gran.style.background = "blue";
  gran.style.width = "300px";
  gran.style.height = "300px";
  gran.style.margin = "10px";
  gran.addEventListener("click", () => console.log("gran bubble"));
  gran.addEventListener("click", () => console.log("gran capture"), true);

  const parent = document.createElement("div");
  parent.id = "parent";
  parent.style.background = "green";
  parent.style.width = "200px";
  parent.style.height = "200px";
  parent.style.margin = "10px";
  parent.addEventListener("click", () => console.log("parent bubble"));
  parent.addEventListener("click", () => console.log("parent capture"), true);

  const child = document.createElement("div");
  child.id = "child";
  child.style.background = "red";
  child.style.width = "100px";
  child.style.height = "100px";
  child.style.margin = "10px";
  child.addEventListener("click", () => console.log("child bubble"));
  child.addEventListener("click", () => console.log("child capture"), true);

  parent.appendChild(child);
  gran.appendChild(parent);
  document.body.append(gran);
});
