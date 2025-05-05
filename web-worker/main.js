const worker = new Worker("web-worker.js");
worker.postMessage(10);
worker.onmessage = (e) => {
  console.log(e.data);
};
