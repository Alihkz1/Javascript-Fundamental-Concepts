for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(i);
    }, 1000);
  });
}
