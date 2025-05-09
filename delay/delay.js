function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function meow() {
  console.log("meow");
  await delay(2000);
  console.log("auw");
}

meow();
