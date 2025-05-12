// Event delegation is a technique where instead of
// adding event listeners to each individual child element,
// you attach a single listener to a parent element and use event bubbling
// to catch events from children.
// It’s a smart and efficient way to handle events,
// especially when working with many or dynamic elements.

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("ul");
  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI")
      console.log("Event Bubbled to the li item");
    if (event.target.classList.contains("delete"))
      event.target.closest("li").remove();
  });
});
