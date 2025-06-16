const startTime = Date.now();
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
];

Promise.all(
  urls.map((url) =>
    fetch(url).then((res) => {
      return {
        json: res.json(),
        timeout: Date.now() - startTime,
      };
    })
  )
).then((response) => {
  console.log(response);
});
