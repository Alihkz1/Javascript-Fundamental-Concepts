function fetchUserById(userId, callback) {
  setTimeout(() => {
    const users = [
      {
        id: 1,
        name: "Ali",
        age: 24,
      },
      {
        id: 2,
        name: "Jamal",
        age: 21,
      },
    ];
    const specificUser = users.find((u) => u.id === userId);
    if (specificUser) callback(null, users[userId]);
    else callback(new Error("No users found"), null);
  }, 2000);
}

const printer = (error, message) => {
  if (error) {
    console.error(error);
  }
  if (message) {
    console.log(message);
  }
};

fetchUserById(1, printer);

/* callback hell solution: */
// getUser(1)
//     .then(user => getPosts(user.id))
//     .then(posts => getComments(posts[0].id))
//     .then(comments => console.log(comments))
//     .catch(error => console.error(error));
