function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));

const map = {
  name: "root",
  children: [
    {
      name: "folder 1",
      children: [
        {
          name: "folder 1 - child 1",
        },
        {
          name: "folder 1 - child 2",
          children: [
            {
              name: "folder 1 - child 2 - child 1",
            },
          ],
        },
      ],
    },
    { name: "folder 2" },
  ],
};

function logMapNames(map) {
  console.log(map.name);
  if (map.children) {
    map.children.forEach((child) => {
      logMapNames(child);
    });
  }
}

logMapNames(map);
