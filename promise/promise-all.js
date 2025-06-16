const startTime = Date.now();
const parent = document.getElementById("output");
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
];

async function call() {
  const response = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return {
        elapsed: Date.now() - startTime,
        data,
      };
    })
  );
  response.forEach((part) => {
    let el = document.createElement("div");
    let text = `fetched in : ${part.elapsed}ms ✅ | result: ${JSON.stringify(
      part.data,
      null,
      2
    )}`;
    el.textContent = text;
    el.style.marginBottom = "100px";
    parent.appendChild(el);
  });
}

call();
