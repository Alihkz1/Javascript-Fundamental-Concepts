// async function fetchAll() {
//   const urls = ["shoes/list", "shirts/list", "blouse/list"];
//   const promises = urls.map((url) => fetch(url));
//   for await (const response of promises) {
//     const data = await response.json();
//     console.log(data);
//   }
// }

async function* generator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

(caller = async () => {
  for await (const value of generator()) {
    console.log(value);
  }
})();

