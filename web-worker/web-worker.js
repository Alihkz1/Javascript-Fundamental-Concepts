self.onmessage = (e) => {
  const result = e.data * 1000;
  self.postMessage(result);
};
